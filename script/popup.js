

// import { isAuth } from "./index.js";
const formInfoCat = document.querySelector('#popup-form-info-cat') //доступ к форме с данными просмотра
export const formRegCat = document.querySelector('#popup-form-reg-cat') //доступ к форме с данными редактирования



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
        if (evt.key === 'Escape') {

            this.close()
        }
    }

    open(cardData, flag) {
        const isAuth = Cookies.get('email');


        if (this._className != 'popup-login' && this._className != 'popup-info-cats' && !isAuth) {

            alert('Для добавления и изменения данных необходима авторизация')
            
        } else if (cardData && flag === 'info') {
            
            const elementsFormCat = [...formInfoCat.elements];

            console.log(elementsFormCat, cardData)
            
            for (let i of elementsFormCat) {
                i.value = '';
                i.value += `${cardData[i.name]}`
                
                this._cardInfoImage.style.backgroundImage = `url(${cardData.img_link})`
                
                this.popup.classList.add('popup_active');
                document.addEventListener('keyup', this._handleEscUp)
            }
            
        } else if (isAuth && cardData && flag === 'reg' ) {
            
            const elementsFormCat = [...formRegCat.elements];
            for (let i of elementsFormCat) {
                i.value = '';
                i.value = `${cardData[i.name]}`
            }
            
            this._cardRegImage.style.backgroundImage = `url(${cardData.img_link})`
            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscUp)
            
        } else {
            

            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscUp)
        }

    }

    close() {

        this.popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._handleEscUp)

    }


    setEventListener() {

        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains(this._className) || !!evt.target.closest('.popup__close')) {
                this.close()
            }
        })
    }
}
