function copyShortURL() {
  const copyText = document.getElementById('inputURL')
  navigator.clipboard.writeText(copyText.textContent)
  alert(`Copied: ${copyText.textContent}`)
}