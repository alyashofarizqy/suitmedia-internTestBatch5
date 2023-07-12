// Mendapatkan elemen form
const form = document.querySelector('form');

// Menambahkan event listener pada saat form disubmit
form.addEventListener('submit', function (event) {
  // Menghentikan aksi default form submit
  event.preventDefault();

  // Mendapatkan nilai dari field "name", "email", dan "message"
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validasi field "name", "email", dan "message"
  if (name.trim() === '') {
    alert('Name field cannot be empty');
    return;
  }

  if (email.trim() === '') {
    alert('Email field cannot be empty');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (message.trim() === '') {
    alert('Message field cannot be empty');
    return;
  }

  // Jika semua validasi berhasil, submit form
  form.submit();
});

// Validasi format email menggunakan regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
