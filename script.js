window.onload = function () {
  const submenuTrigger = document.getElementById("submenu-trigger")

  if (!window.animRunning) {
    window.animRunning = {}
  }

  submenuTrigger.addEventListener("click", function () {
    const navsubmenu = document.querySelector(".globalnav-item-flyout-open")

    const navitem = document.getElementById("globalnav-list")

    const applelogoimg = document.getElementById("apple-logo-image")

    const searchLink = document.getElementById("gobalnav-search-link")

    const bagLink = document.getElementById("globalnav-bag-link")

    const overlap = document.querySelector(".nav-overlap")

    const buttonTopOpen = document.getElementById("globalnav-anim-menutrigger-bread-top-open")
    const buttonBottomOpen = document.getElementById("globalnav-anim-menutrigger-bread-bottom-open")
    const buttonTopClose = document.getElementById("globalnav-anim-menutrigger-bread-top-close")
    const buttonBottomClose = document.getElementById("globalnav-anim-menutrigger-bread-bottom-close")

    if (!window.animRunning["globalnav-menutrigger-bread-bottom-open"]) {
      buttonTopOpen.beginElement()
      buttonBottomOpen.beginElement()

      //globalnav-item-flyout-open 설정
      navsubmenu.style.display = "block"
      navsubmenu.style.transition = "height 2s ease"

      // globalnav-list 설정
      navitem.style.height = "100vh"
      navitem.style.transition = "height 0.5s ease"

      // apple-logo-image 설정
      applelogoimg.style.display = "none"

      //gobalnav-search-link 설정
      searchLink.style.display = "none"

      // globalnav-bag-link
      bagLink.style.display = "none"

      //nav-overlap 설정 Y스크롤은 보이고 스크롤 기능은 막혀있게 설정
      overlap.style.overflowY = "scroll"
      overlap.style.overflowX = "hidden"
      overlap.style.position = "fixed"
      overlap.style.width = "100%"

      window.animRunning["globalnav-menutrigger-bread-bottom-open"] = true
    } else {
      buttonTopClose.beginElement()
      buttonBottomClose.beginElement()

      //globalnav-item-flyout-open 설정
      navsubmenu.style.display = "none"
      navsubmenu.style.transition = "height 2s ease"

      // globalnav-list 설정
      navitem.style.height = "0"
      navitem.style.transition = "height 0.5s ease"

      // apple-logo-image 설정
      applelogoimg.style.display = "flex"

      //gobalnav-search-link 설정
      searchLink.style.display = "flex"

      // globalnav-bag-link
      bagLink.style.display = "flex"

      //nav-overlap 설정 Y스크롤은 보이고 스크롤 기능은 막혀있게 설정
      overlap.style.overflow = "scroll"
      overlap.style.position = "relative"
      overlap.style.width = "100%"

      window.animRunning["globalnav-menutrigger-bread-bottom-open"] = false // 실행 중 플래그 해제
    }
  })
}
