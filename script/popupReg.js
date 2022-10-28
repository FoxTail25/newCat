// const popupH2 = document.querySelector('#popupH2').innerText;
// const popupReg = document.querySelector('.popup-cat-info');
// // popupReg.append(popup)
// console.log(popupH2)

function CreatePopupReg() {
    // console.log(typeof this)
    let popupHead = document.querySelector('#popupH2')
    let popupBtn = document.querySelector('.form__btn')
    popupHead.innerText = 'редактирование данных'
    popupBtn.innerText = 'coхранить данные'

    
    popupAddCat.open()
    const id = this.querySelector('.card__id').innerText
    //.document.querySelector('.card__id')
    console.log(id)
    // let test = true;
    const idCatInPopup = document.querySelector('#inputIdCat')
    // idCatInPopup.removeAttribute('required')
    // idCatInPopup.removeAttribute('placeholder')
    idCatInPopup.setAttribute('value',id)
    // cl(idCatInPopup)
    // idCatInPopup.innerText = id
    // console.log(idCatInPopup.style.value)// = '33333'

    formCatAdd.removeEventListener('submit', handelFormAddCat)
    formCatAdd.addEventListener('submit', handelFormRegCat)
    // console.log(popupHead)

}



// CreatePopupReg()

