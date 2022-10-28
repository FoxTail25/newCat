// const popupH2 = document.querySelector('#popupH2').innerText;
// const popupReg = document.querySelector('.popup-cat-info');
// // popupReg.append(popup)
// console.log(popupH2)
const popupHead = document.querySelector('#popupH2')
const popupBtn = document.querySelector('.form__btn')
let idCatInPopup = document.querySelector('#inputIdCat')
let nameCatInPopup = document.querySelector('#inputNameCat')

function CreatePopupReg() {
    let textIdFromClassName = this.className
  
    let numId = parseInt(textIdFromClassName.match(/\d+/))
    // console.log(numId)
    popupHead.innerText = 'редактирование данных'
    popupBtn.innerText = 'coхранить данные'
    
    
    idCatInPopup.setAttribute('value',numId)
    idCatInPopup.value = numId
    popupAddCat.open()

 
    
    formCatAdd.removeEventListener('submit', handelFormAddCat)
    formCatAdd.addEventListener('submit', handelFormRegCat)
    // console.log(popupHead)
}




// CreatePopupReg()

