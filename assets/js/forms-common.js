// Common form utilities for Data Platform forms
// Shared across contact, events, funding, highlights, and jobs forms

// Common configuration
const FORM_CONFIG = {
  // Google Apps Script endpoint
  submitUrl: 'https://script.google.com/macros/s/AKfycbzDm3HImX8rx052Ooe888T702iuAYNosV4zO3mgSgucQ1IKCI2hhP_EMhFI82lMqDDT/exec',
  
  // Session timing constraints
  minSessionTime: 5, // seconds
  
  // Additional field names
  additionalFields: ['website', 'phone_number', 'company']
};

// Generate a unique session ID with prefix
function generateSessionId(prefix) {
  return prefix + '_' + Math.random().toString(36).slice(2, 11) + '_' + Date.now();
}

// Common validation for all forms
function validateCommonSubmission(sessionStartTime) {
  // Check session timing
  if (!validateSessionDuration(sessionStartTime)) {
    console.log('Session too short');
    return false;
  }
  
  // Check additional fields
  if (!validateAdditionalFields()) {
    return false;
  }
  
  return true;
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate session duration (minimum time spent on page)
function validateSessionDuration(sessionStartTime) {
  const sessionDuration = (Date.now() - sessionStartTime) / 1000;
  return sessionDuration >= FORM_CONFIG.minSessionTime;
}

// Validate additional fields
function validateAdditionalFields() {
  for (const fieldName of FORM_CONFIG.additionalFields) {
    const field = document.getElementById(fieldName);
    if (field && field.value.trim() !== '') {
      console.log('Additional fields validation failed');
      return false;
    }
  }
  return true;
}

// Add common form metadata to FormData
function addFormMetadata(formData, origin, sessionId, sessionStartTime) {
  formData.append('originUrl', location.href);
  formData.append('origin', origin);
  formData.append('session_id', sessionId);
  formData.append('session_duration', (Date.now() - sessionStartTime) / 1000);
  
  // Add additional fields
  for (const fieldName of FORM_CONFIG.additionalFields) {
    const field = document.getElementById(fieldName);
    if (field) {
      formData.append(fieldName, field.value);
    }
  }
}

// Handle form submission with common logic
function submitFormData(formData, successCallback, errorCallback) {
  return fetch(FORM_CONFIG.submitUrl, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      successCallback(data.message);
    } else {
      errorCallback(data.message);
    }
  })
  .catch(error => {
    console.error('Form submission error:', error);
    errorCallback('Network error. Please check your connection and try again.');
  });
}

// Manage button loading state
function setButtonLoadingState(buttonId, isLoading, loadingText = 'Submitting...') {
  const button = document.getElementById(buttonId);
  if (!button) return;
  
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = loadingText;
    button.disabled = true;
  } else {
    button.textContent = button.dataset.originalText || button.textContent;
    button.disabled = false;
  }
}

// Show form message (success or error)
function showFormMessage(messageElementId, message, isSuccess = true) {
  const messageElement = document.getElementById(messageElementId);
  if (!messageElement) return;
  
  const textElement = messageElement.querySelector('p');
  if (textElement && message) {
    textElement.textContent = message;
  }
  
  messageElement.style.display = 'block';
  messageElement.scrollIntoView({ behavior: 'smooth' });
}

// Hide form message
function hideFormMessage(messageElementId) {
  const messageElement = document.getElementById(messageElementId);
  if (messageElement) {
    messageElement.style.display = 'none';
  }
}

// Reset form after successful submission
function resetForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
  }
}

// Prevent form submission on Enter key press
function preventEnterSubmission(formId) {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  });
}