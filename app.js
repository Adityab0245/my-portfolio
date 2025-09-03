function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  if(!name || !email || !msg) return alert('Please fill all fields.');
  alert(`Thanks, ${name}! Your message was received (demo).`);
  e.target.reset();
}
