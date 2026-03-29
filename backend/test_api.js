fetch('http://localhost:5000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: 'safin', password: '123' })
})
.then(res => res.text())
.then(text => console.log('RAW_TEXT:', text))
.catch(err => console.error('ERROR:', err.message));
