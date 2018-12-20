import validation from 'validate.js';

export default function validate(fieldName, value) {
  var constraints = {
    email: {
      email: true
    },
    phoneNumber: {
      presence: true,
      format: {
        pattern: '^[0-9]{10}$',
        message: 'invalid phone number, must be 10 no',
      },
    },
    required: {
      presence: {
        allowEmpty: false,
        message: "is required"
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    },
    confirmPassword: {
      presence: true,
      equality: 'password'
    },
  };

  var formValues = {};
  formValues[fieldName] = value;

  var formFields = {};
  formFields[fieldName] = constraints[fieldName];


  const result = validation(formValues, formFields);

  if (result) {
    return result[fieldName][0].substring(fieldName.length + 1, result[fieldName][0].length);
  }

  return null;
}