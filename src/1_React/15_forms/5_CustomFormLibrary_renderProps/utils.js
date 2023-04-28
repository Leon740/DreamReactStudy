// eslint-disable-next-line import/prefer-default-export
export function getErrorMsgFn(validationName, minLength = 8) {
  let msg = '';

  switch (validationName) {
    case 'required':
      msg = 'This field is required.';
      break;
    case 'email':
      msg = 'Please enter a valid email.';
      break;
    case 'minLength':
      msg = `Please enter at least ${minLength} characters.`;
      break;
    case 'confirmPassword':
      msg = "The passwords don't match.";
      break;
    default:
      msg = 'This field is required.';
  }

  return msg;
}
