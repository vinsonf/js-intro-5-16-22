const phoneNumber = prompt('what is your phone number?');
const phoneNumberPattern = /\(?\d{3}[\) ]\d{3}[ -]\d{4}/;
if (phoneNumberPattern.test(phoneNumber)) {
  alert('your phone number is valid');
  alert(phoneNumber.replace(/\d{4}/, '****'));
} else {
  alert('your phone number is invalid');
}