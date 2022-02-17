function adapter () {
  const dip = document.documentElement.clientWidth
  const footFontSize = dip / 10
  document.documentElement.style.fontSize = footFontSize + 'px'
}
adapter()
window.onresize = adapter
