var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneNumberInput = document.getElementById('phone-number')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phoneNumber = phoneNumberInput.value
  var preview = document.getElementById('preview')

  preview.innerHTML =
  'Hi my name is ' + firstName + ' ' + lastName + ' ' +
  description +
  ' If you\'re interested in a date, you can email me at ' + email +
  ' or give me a call at ' + phoneNumber
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
descriptionInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneNumberInput.addEventListener('input', updateProfile)
