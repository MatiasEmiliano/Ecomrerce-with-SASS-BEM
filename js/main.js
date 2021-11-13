const thumbImg = document.getElementsByClassName("images__thumbnail")
const mainImg = document.getElementsByClassName("images__main-img")
const modal = document.getElementsByClassName('modal')[0]
const closeIcon = document.getElementsByClassName('modal__close')[0]
const nextImg = document.getElementsByClassName('images__button-next-container')
const prevImg = document.getElementsByClassName('images__button-prev-container')
const plusButton = document.getElementsByClassName('button-cantidad__plus')[0]
const minusButton = document.getElementsByClassName('button-cantidad__minus')[0]
const label = document.getElementsByClassName('button-cantidad__label')[0]
const addCart = document.getElementsByClassName('button-chart')[1]
const cartNumber = document.getElementsByClassName('menu__cart-number')[0]
const cartImg = document.getElementsByClassName('menu__img-cart')[0]
const modalCart = document.getElementsByClassName('modal-cart')[0]
const cantidadCart = document.getElementsByClassName('modal-cart__cantidad')[0]
const totalPriceCart = document.getElementsByClassName('modal-cart__total')[0]
const price = document.getElementsByClassName('card__price-now')[0]
const cartImgProduct = document.getElementsByClassName('modal-cart__img-product')[0]
const cartDelete = document.getElementsByClassName('modal-cart__delete')[0]
const cartTextContainer = document.getElementsByClassName('modal-cart__text-container')[0]
const cartContProduct = document.getElementsByClassName('modal-cart__container-product')[0]
const emptyLabel = document.getElementsByClassName('modal-cart__empty')[0]
const deleteCart = document.getElementsByClassName('modal-cart__delete')[0]
const closeMenu = document.getElementsByClassName('menu__close')[0]
const openMenu = document.getElementsByClassName('menu__menu-mobile')[0]
let mainImgSrc = "images/image-product-1.jpg";
let pictureNumb = 1
let cantidad = 0

cartRefresh()

/*--------------ThumbNail Event----------------*/
for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', function (e) {
        pictureNumb = e.target.id
        refreshImgs(pictureNumb)
    })
}
/*--------------Function to refresh the imgs's styles and Main Pictures----------------*/
function refreshImgs(value) {
    mainImgSrc = "images/image-product-" + value + ".jpg";

    changeImg(mainImg[0],mainImgSrc,0)   // Cambia Imagen c/ efecto
    mainImg[1].src = mainImgSrc

    for (let j = 0; j < thumbImg.length; j++) {
        if (j == (value - 1)) {
            thumbImg[j].classList.add('images__thumbnail--border')
        }
        else {
            thumbImg[j].classList.remove('images__thumbnail--border')
        }
    }
}
/*---------------Function to change img with Effect-------------*/
function changeImg(imagen,ruta,opaIni){
    imagen.style.opacity = opaIni
    imagen.src = ruta
    let i = 0 
    let opacidad = opaIni
    let myTimer = setInterval(function(){
        opacidad =opaIni +((1-opaIni)/10) *i
        imagen.style.opacity = opacidad 
        i++
        console.log(opacidad)
        if(i>10){
        clearInterval(myTimer)
        }
},10)}
/*------------Main Image Event-------------*/
mainImg[0].addEventListener('click', function () {
    if (window.innerWidth > 930) {
        modal.style.display = 'flex'
    }
})
/*------------CLose Modal Event-------------*/
closeIcon.addEventListener('click', function () {
    modal.style.display = 'none'
})
/*--------Button Next Image Event---------*/
for (let i = 0; i<nextImg.length; i++){
    nextImg[i].addEventListener('click', function (e) {
        if (pictureNumb <= 3) {
            pictureNumb++
        } else {
            pictureNumb = 1
        }
        refreshImgs(pictureNumb)
    })
}
/*---------Button Prev Image Event---------*/
for (let i = 0; i<nextImg.length; i++){
    prevImg[i].addEventListener('click', function () {
        if (pictureNumb >= 2) {
            pictureNumb--
        } else {
            pictureNumb = 4
        }
        refreshImgs(pictureNumb)
    })
}
/*--------------'+' Button-------------------*/
plusButton.addEventListener('click', function () {
    label.innerHTML++
})
/*--------------'-' Button-------------------*/
minusButton.addEventListener('click', function () {
    if (label.innerHTML > 0) {
        label.innerHTML--
    }
})
/*----------  Add to Cart Button  --------*/
addCart.addEventListener('click', function () {
    cantidad += parseInt(label.innerHTML)
    cartRefresh()
})
/*--------------Button Visible Cart----------------*/
cartImg.addEventListener('click', function () {
    modalCart.classList.toggle('modal-cart--visible')
})
/*--------------Button Delete Item----------------*/
deleteCart.addEventListener('click', function () {
    cantidad = 0
    cartRefresh()
})
/*--------------Button Close Menu----------------*/
closeMenu.addEventListener('click', function () {
    document.getElementsByClassName('menu__items-list')[0].classList.toggle('menu__items-list--show')
})
/*--------------Button Open Menu----------------*/
openMenu.addEventListener('click', function () {
    document.getElementsByClassName('menu__items-list')[0].classList.toggle('menu__items-list--show')
})
/*------------------ Function Refresh cart conatiner -------------------*/
function cartRefresh() {
    if (cantidad > 0) {
        cartImgProduct.style.visibility = "visible"
        cartDelete.style.visibility = "visible"
        cartTextContainer.style.visibility = "visible"
        emptyLabel.style.visibility = 'hidden'
        cartNumber.style.visibility = 'visible'
        cartNumber.innerHTML = cantidad
        cantidadCart.innerHTML = 'x' + cantidad
        totalPriceCart.innerHTML = '$' + cantidad * parseInt(price.innerHTML.substring(1, price.innerHTML.length))
    }
    else {
        cartImgProduct.style.visibility = 'hidden'
        cartDelete.style.visibility = 'hidden'
        cartTextContainer.style.visibility = 'hidden'
        emptyLabel.style.visibility = 'visible'
        cartNumber.style.visibility = 'hidden'
    }
}
