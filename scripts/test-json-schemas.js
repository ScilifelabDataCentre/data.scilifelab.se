#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize AJV with formats support
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false
});
addFormats(ajv);

// Find all JSON files recursively
const findJsonFiles = (dir, baseDir = '') => {
  const jsonFiles = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(baseDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        jsonFiles.push(...findJsonFiles(fullPath, relativePath));
      } else if (item.endsWith('.json')) {
        jsonFiles.push(relativePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return jsonFiles;
};

// Get schema path for a JSON file
const getSchemaPath = (jsonFilePath) => {
  const schemaPath = jsonFilePath.replace(/\.json$/, '.schema.json');
  return path.join('schemas/data', schemaPath);
};

// Test a single JSON file against its schema
const testJsonFile = (jsonFilePath) => {
  const schemaPath = getSchemaPath(jsonFilePath);
  
  try {
    if (!fs.existsSync(schemaPath)) {
      return {
        file: 'data/' + jsonFilePath,
        schema: schemaPath,
        status: 'MISSING_SCHEMA',
        message: 'Schema file does not exist',
        valid: false
      };
    }
    
    const dataPath = path.resolve("data/", jsonFilePath);
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    if (schema.$schema) {
      delete schema.$schema;
    }
    
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    return {
      file: 'data/' + jsonFilePath,
      schema: schemaPath,
      status: valid ? 'PASSED' : 'FAILED',
      message: valid ? 'Validation passed' : ajv.errorsText(validate.errors, { dataVar: 'data' }),
      valid
    };
  } catch (error) {
    return {
      file: 'data/' + jsonFilePath,
      schema: schemaPath,
      status: 'ERROR',
      message: error.message,
      valid: false
    };
  }
};

// Main test function
const testJsonSchemas = () => {
  console.log('🧪 JSON Schema Validation Test\n');
  console.log('=' .repeat(60));
  
  const jsonFiles = findJsonFiles('data');
  
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
    
    // if (statusCounts.MISSING_SCHEMA > 0) {
    //   console.log('\n💡 To create missing schemas:');
    // //   results
    // //     .filter(r => r.status === 'MISSING_SCHEMA')
    // //     .forEach(result => {
    // //       console.log(`   mkdir -p $(dirname ${result.schema})`);
    // //       console.log(`   touch ${result.schema}`);
    // //     });
    // }
    
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!');
    process.exit(0);
  }
};

// Run the test
testJsonSchemas(); 