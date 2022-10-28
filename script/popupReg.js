// const popupH2 = document.querySelector('#popupH2').innerText;
// const popupReg = document.querySelector('.popup-cat-info');
// // popupReg.append(popup)
// console.log(popupH2)
const popupHead = document.querySelector('#popupH2')
const popupBtn = document.querySelector('.form__btn')
let idCatInPopup = document.querySelector('#inputIdCat')

function CreatePopupReg() {
    let textIdFromClassName = this.className
    // console.log(textIdFromClassName)
    let numId = parseInt(textIdFromClassName.match(/\d+/))
    console.log(numId)
    popupHead.innerText = 'редактирование данных'
    popupBtn.innerText = 'coхранить данные'
    
    
    popupAddCat.open()
    // const id = this.querySelector('.card__id')
    // .document.querySelector('.card__id')
    // console.log(id)
    // let test = true;
    // idCatInPopup.removeAttribute('required')
    // idCatInPopup.removeAttribute('placeholder')
    idCatInPopup.setAttribute('value',numId)
    // cl(idCatInPopup)
    // idCatInPopup.innerText = id
    // console.log(idCatInPopup.style.value)// = '33333'
    
    formCatAdd.removeEventListener('submit', handelFormAddCat)
    formCatAdd.addEventListener('submit', handelFormRegCat)
    // console.log(popupHead)
}

function closeRegPopup() {
    idCatInPopup.removeAttribute('value')
    popupHead.innerText = 'Добавить котика'
    popupBtn.innerText = 'Сохранить'
    // idCatInPopup.setAttribute('required')
}


// CreatePopupReg()

