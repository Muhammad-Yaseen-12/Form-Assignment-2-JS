document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email-address').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var birthDate = document.getElementById('birth-date').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var region = document.getElementById('region').value;
    var postalCode = document.getElementById('postal-code').value;

    // Display the data
    var formData = `
      Full Name: ${fullName}
      Email Address: ${email}
      Phone Number: ${phoneNumber}
      Birth Date: ${birthDate}
      Gender: ${gender}
      Address: ${address1}, ${address2}
      Country: ${country}
      City: ${city}
      Region: ${region}
      Postal Code: ${postalCode}
    `;

    document.getElementById('form-data').textContent = formData;
});