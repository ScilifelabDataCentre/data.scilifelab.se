#!/usr/bin/env node

const glb = require('glob');
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialise AJV with formats support
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false
});
addFormats(ajv);

// Get schema path for a JSON file
const getSchemaPath = function (jsonFilePath) {
  const schemaPath = jsonFilePath.replace(/\.json$/, '.schema.json');
  return path.join('schemas', schemaPath);
};

// Test a single JSON file against its schema
const testJsonFile = function (jsonFilePath) {
  const schemaPath = getSchemaPath(jsonFilePath);
  const testResult = {
        file: jsonFilePath,
        schema: schemaPath
  }

  try {
    if (!fs.existsSync(schemaPath)) {
        testResult.status = 'MISSING_SCHEMA';
        testResult.message = 'Schema file does not exist';
        return testResult;
    }
    
    const dataPath = path.resolve(jsonFilePath);
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    if (schema.$schema) {
      delete schema.$schema;
    }
    
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    testResult.status = valid ? 'PASSED' : 'FAILED';
    testResult.message = valid ? 'Validation passed' : ajv.errorsText(validate.errors, { dataVar: 'data' });
    return testResult;
  } catch (error) {
      testResult.status = 'ERROR';
      testResult.message = error.message;
      return testResult;
  }
};

// Main test function
const testJsonSchemas = function () {
  console.log('🧪 JSON Schema Validation Test\n');
  console.log('=' .repeat(60));
  
  // collect JSON files in 'data' directory
  const jsonFiles = glb.globSync('data/**/*.json');
  
  if (jsonFiles.length === 0) {
    console.log('❌ No JSON files found in data directory');
    return;
  }
  
  console.log(`📁 Found ${jsonFiles.length} JSON file(s) to test\n`);
  
  const results = jsonFiles.map(testJsonFile);
  const statusCounts = results.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1;
    return acc;
  }, {});
  
  // Print detailed results
  console.log('📊 Test Results:\n');
  
  const statusIcons = {
    'PASSED': '✅',
    'FAILED': '❌',
    'MISSING_SCHEMA': '⚠️',
    'ERROR': '💥'
  };
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${statusIcons[result.status]} ${result.file}`);
    console.log(`   Schema: ${result.schema}`);
    console.log(`   Status: ${result.status}`);
    
    if (result.status === 'MISSING_SCHEMA') {
      console.log(`   Message: Schema file does not exist`);
    } else if (result.status === 'FAILED' || result.status === 'ERROR') {
      console.log(`   Message: ${result.message}`);
    }
    console.log('');
  });
  
  // Print summary
  console.log('=' .repeat(60));
  console.log('📈 Summary:');
  console.log(`   Total files tested: ${jsonFiles.length}`);
  console.log(`   ✅ Passed: ${statusCounts.PASSED || 0}`);
  console.log(`   ❌ Failed: ${statusCounts.FAILED || 0}`);
  console.log(`   ⚠️  Missing schemas: ${statusCounts.MISSING_SCHEMA || 0}`);
  console.log(`   💥 Errors: ${statusCounts.ERROR || 0}`);
  
  const hasIssues = (statusCounts.FAILED || 0) > 0 || (statusCounts.MISSING_SCHEMA || 0) > 0 || (statusCounts.ERROR || 0) > 0;
  
  if (hasIssues) {
    console.log('\n❌ Test completed with issues');
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!');
    process.exit(0);
  }
};

// Run the test
testJsonSchemas();
