export const formulario = (e) => {
  // console.log(e.currentTarget.elements)
  const email = 'your@email.com'
  const url = `https://formsubmit.co/${email}`
  const input = e.currentTarget.elements

  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  const option = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  }

  if (input.terms.checked) {
    fetch(url, option)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  } else {
    alert('Porfavor acepta los terminos')
  }
}