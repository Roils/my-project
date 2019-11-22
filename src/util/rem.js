onload = function () {
    setHTML()
    onresize = function () {
      setHTML()
    }
  
    function setHTML() {
      let baseVal = 100
      let pageWidth = 375
      let maxFontSize = 200
      let screenWidth = document.querySelector('html').offsetWidth
      let fontsize = screenWidth * baseVal / pageWidth
      if (fontsize > maxFontSize) {
        fontsize = maxFontSize
      }
      document.querySelector('html').style.fontSize = fontsize + 'px'
    }
  }