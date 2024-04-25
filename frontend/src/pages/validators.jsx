export function validateRequiredFields(fields) {
  const errorObject = {};
  fields.forEach((field) => {
    if (!field.value) {
      errorObject[field.name] = 'This field is required';
    }
  });
  return errorObject;
}

export function validateEmail(email) {
  const errorObject = {};
  if (!email.includes('@')) {
    errorObject.email = 'Invalid email address';
  }
  return errorObject;
}

export function validatePassword(password, confirmPassword) {
  const errorObject = {};
  if (password !== confirmPassword) {
    errorObject.password = 'Passwords do not match';
  }
  return errorObject;
}

export function validatePhoneNumber(phone) {
  const errorObject = {};
  if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
    errorObject.phone = 'Invalid phone number';
  }
  return errorObject;
}

export function validateDateOfBirth(dob) {
  const errorObject = {};
  if (!dob.match(/^\d{2}-\d{2}-\d{4}$/)) {
    errorObject.dob = 'Invalid date of birth';
  }
  return errorObject;
}