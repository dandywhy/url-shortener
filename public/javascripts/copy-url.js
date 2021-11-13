function copyShortURL() {
  const copyText = document.getElementById('inputURL')
  navigator.clipboard.writeText(copyText.textContent)
  swal("Copied!", {
    button: false,
    timer: 1000,
  })
}


