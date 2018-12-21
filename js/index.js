window.onload=function () {
  const guides = document.querySelectorAll('footer .guide')
  const sections = document.querySelectorAll("#content>section")
  guides.forEach((item,index)=>{
    item.onclick=function () {
      for (var i = 0; i < guides.length; i++) {
        guides[i].className = 'guide'
        sections[i].className = ''
      }
      this.className = 'guide on'
      sections[index].className = 'active'
    }
  })
  console.log("====")
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: false,//可选选项，自动滑动
    loop:true,
    pagination: {
      el: '.swiper-pagination',
    }
  })
  /*星星问题*/
  const starsRating = [3.6,4.1,3.2,3.6]
  /*获取所有星星相关的div父集*/
  const starsNodes = document.querySelectorAll(".stars")
  starsNodes.forEach(function (item,index) {
      const rating = starsRating[index]
      const onCount = Math.floor(rating)
      const halfCount = Math.round(rating-onCount)
      for (var i = 0; i < item.children.length; i++) {
          if(i<onCount){
            item.children[i].className ='stars-item on'
          }else if(i<onCount+halfCount){
            item.children[i].className ='stars-item half'
          }else{
            item.children[i].className ='stars-item off'
          }
      }
  })

  var profileLink = document.querySelector('#app .personal-number>a')
  var loginOrRegister = document.querySelectorAll('.login_content>form>div')
  var loginA = document.querySelectorAll('.login_header_title>a')
  var switchCircle = document.querySelector('.switch_circle')
  var switchButton = document.querySelector('.switch_button')
  var switchText = document.querySelector('.switch_text')
  var goBack = document.querySelector('.go_back')
  var login = document.querySelector('#app>div:last-of-type')
  var headerLogin = document.querySelector('.header-login')

//切换手机号登陆/密码登陆
  for (var i = 0; i < loginA.length; i++) {
    loginA[i].index = i
    loginA[i].addEventListener('touchend', function () {
      for (var i = 0; i < loginOrRegister.length; i++) {
        loginA[i].className = ''
        loginOrRegister[i].className = ''
      }
      this.className = 'on'
      loginOrRegister[this.index].className = 'on'
    })
  }
//登陆界面切换密码明/暗文
  var isSwitch = false
  switchButton.addEventListener('touchend', function () {
    if (!isSwitch) {
      switchCircle.style.transform = 'translateX(27px)'
      this.className = 'switch_button on'
      switchText.innerText = 'abc'
    } else {
      switchCircle.style.transform = 'translateX(0)'
      this.className = 'switch_button off'
      switchText.innerText = '...'
    }
    isSwitch = !isSwitch
  })

//控制登陆界面的on/off
  profileLink.addEventListener('touchend', function () {
    login.className = 'on'
  })
  goBack.addEventListener('touchend', function () {
    login.className = 'off'
  })

//点击首页的登录注册 跳转到登录注册
  headerLogin.addEventListener('touchend', function () {
    login.className = 'on'
  })


}
