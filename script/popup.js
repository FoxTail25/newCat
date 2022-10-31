// import { isAuth } from "./index.js";
const formInfoCat = document.querySelector('#popup-form-info-cat') //доступ к форме с данными просмотра
export const formRegCat = document.querySelector('#popup-form-reg-cat') //доступ к форме с данными редактирования


// import { formInfoCat } from "./index.js";

// const isAuth = Cookies.get('email')
export class Popup {
    constructor(className) {
        this._className = className;
        this.popup = document.querySelector(`.${className}`)
        this._handleEscUp = this._handleEscUp.bind(this)
        // this._form = document.querySelector(`.${className} .form`)
        this._name = document.querySelector(`.${className} #inputNameInfoCat`)
        this._cardInfoImage = document.querySelector('.form-info-img')
        this._cardRegImage = document.querySelector('.form-reg-img')
        // this._cardRegImage = document.querySelector('.form__image')
        // this._name = document.querySelector(`.${className} #inputNameInfoCat`)
    }

    _handleEscUp(evt) {
        // console.log(evt.key === 'Escape')
        if(evt.key === 'Escape') {

            this.close()
        }
    }


    open(cardData, flag) {
        const isAuth = Cookies.get('email');
    // 
        if(this._className != 'popup-login' && this._className != 'popup-info-cats' &&  !isAuth) {

            alert('Для добавления и изменения данных необходима авторизация')
            popupAddCat.close()
            popupRegCat.close()
            auth.open()
   
        } else if (cardData && flag === 'info') {
         console.log(this._className)
            const elementsFormCat = [...formInfoCat.elements];
            for( let i of elementsFormCat){
                i.value = '';
                i.value += `${i.placeholder}: ${cardData[i.name]}`

            this._cardInfoImage.style.backgroundImage = `url(${cardData.img_link})`
            
            
            
            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscUp)
        }
        
    } else if (cardData && flag === 'reg') {
        
        const elementsFormCat = [...formRegCat.elements];
        for( let i of elementsFormCat){
            // console.log(i)
            i.value = '';
            i.value = `${cardData[i.name]}`
            //         //  console.log(cardData.img_link)
        }
        //     // console.log(elementsFormCat);
        
        
        this._cardRegImage.style.backgroundImage = `url(${cardData.img_link})`
            // console.log(this._cardRegImage)
            // console.log(cardData.img_link)
            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscUp)
        }else {
            //    console.log(flag)
            
            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscUp)
        }
        // formFuller(cardData) {

        // }
    }

    close() {
        // let catId = document.querySelector('#inputIdCat')
        // console.log(catId)
        this.popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._handleEscUp)
        // closeRegPopup()
        // console.log(e)
        // evt.target.reset();

    }
    
    // closeReg() {
        //     this.popup.classList.remove('popup_active');
        //     document.removeEventListener('keyup', this._handleEscUp)
    // }

    setEventListener(){
        this.popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains(this._className) || !!evt.target.closest('.popup__close')){
                this.close()
            }
        })
    }
}



// function closeRegPopup() {
//     popupHead.innerText = 'Добавить котика'
//     popupBtn.innerText = 'Сохранить'

// let z = document.querySelectorAll('.form input')
// // console.log(z)
// for(e of z) {
//    e.value = '' 
// }
// let f = z.document.querySelector('')
// console.log(typeof z.children)


// for(i in f) {
//     console.log(i.classList)
//     console.log(f[i].innerText)
// }

    // const elementsFormCat = [...formCatAdd.elements]; //получаем массив элементов формы
    // const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы
    // console.log(elementsFormCat)
    // for( i in dataFromForm) {
    //     console.log(dataFromForm[i])
    //     dataFromForm[i] = ''
    // }
    
    // idCatInPopup.setAttribute('required','')
    // catId.setAttribute('required','')
    // console.log('test')
// }