var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneNumberInput = document.getElementById('phone-number')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var fullName = firstName + ' ' + lastName
  var description = descriptionInput.value
  var email = emailInput.value
  var phoneNumber = phoneNumberInput.value
  var preview = document.getElementById('preview')
  var rawHTML = document.getElementById('html-preview')

  preview.innerHTML =
  '<h1>Hi my name is ' + fullName + '!</h1>' +
  '<p>' + description + '</p>' +
  '<p>' +
  '  If you\'re interested in a date, you can email me at' +
  '  <a href="mailto:EMAIL_ADDRESS" target="_blank">' + email + '</a>' +
  '  or give me a call at' +
  '  <a href="tel:PHONE_NUMBER" target="_blank">' + phoneNumber + '</a>.' +
  '</p>'

  rawHTML.textContent =
  '<h1>Hi my name is ' + fullName + '!</h1>' +
  '<p>' + description + '</p>' +
  '<p>' +
  '  If you\'re interested in a date, you can email me at' +
  '  <a href="mailto:EMAIL_ADDRESS" target="_blank">' + email + '</a>' +
  '  or give me a call at' +
  '  <a href="tel:PHONE_NUMBER" target="_blank">' + phoneNumber + '</a>.' +
  '</p>'
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
descriptionInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneNumberInput.addEventListener('input', updateProfile)
