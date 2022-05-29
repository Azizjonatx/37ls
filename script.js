
//class ES6 bilan kirib kegan 

class Human {
  constructor (obj){
    this.name = 'odamzod'
    this.qoli = obj.qoli
    this.oyogi = obj.oyogi
    this.yurak = obj.yurak == undefined ? true : obj.yurak  
  }
}

// VORISLIK
class Man extends Human {
  constructor (obj){
    super(obj)
    this.gender = 'e'
    this.hair = obj.hair
  }
}
class Woman extends Human {
  constructor (obj){
    super(obj)
    this.gender = 'a'
    this.hair = obj.hair
  }
}
const odam = new Human ({
  qoli:  2,
  oyogi: 2,
  yurak: '3 kamerali'
}
) 
const erkak = new Man ({
  qoli:  2,
  oyogi: 2,
  hair: 'long'
}
) 
const ayol = new Woman ({
  qoli:  2,
  oyogi: 2,
  hair: 'short'
}
) 

// instanceof - bu nimadan keb chiqganini aniqlab beradi


const navigation = document.querySelector('.header__nav')

class Scroll {
  constructor(set) {
    if (typeof set.el == 'string'){
      this.el = document.querySelector(set.el)
    } else if (set.el instanceof HTMLElement){
      this.el = set.el 
    }
    this.top = set.top
    this.unit = set.unit
    this.el.style.top = this.scrollUnit() + 'px'
    this.el.style.position = 'fixed'
    window.addEventListener('scroll', () => this.scroll())
  }
  scroll(){
    this.measure = this.scrollUnit()
    if (this.measure - pageYOffset > 0){
      this.el.style.top = `${this.measure - pageYOffset}px`
    } else {
      this.el.style.top = 0
    }
  }
  scrollUnit(){
    if (this.unit == 'px'){
      return this.top
    } else if (this.unit == '%' || this.unit == undefined) {
        return window.innerHeight / 100 * this.top - this.el.clientHeight
      } 
  }
}



const obj = new Scroll ({
  el: navigation,
  top: '100'
})


const logo = document.querySelector('.header__content')
class Random {
  constructor(cont){
    this.header = cont.header;
    this.header.addEventListener('mouseover', () => this.mathRandom())
  }
  mathRandom(){
    
     let randomNumberTop = Math.floor(Math.random()*(window.innerHeight-100))
     let randomNumberRight = Math.floor(Math.random()*(window.innerWidth-100))
    return this.header.style.marginTop = `${randomNumberTop}px`, this.header.style.marginRight = `${randomNumberRight}px`, console.log(this.header.style.marginTop);
  }
}
const RandomObj = new Random ({
  header: logo
})

