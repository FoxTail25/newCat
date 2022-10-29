// import { isAuth } from "./index.js";
const isAuth = Cookies.get('email')
class Popup {
    constructor(className) {
        this._className = className;
        this.popup = document.querySelector(`.${className}`)
        this._handleEscUp = this._handleEscUp.bind(this)
    }

    _handleEscUp(evt) {
        // console.log(evt.key === 'Escape')
        if(evt.key === 'Escape') {

            this.close()
        }
    }


    open() {
        const isAuth = Cookies.get('email');
        // let a = isAuth
        // console.log(a === '')
        console.log(isAuth)
        if(this._className != 'popup-login' && !isAuth) {
            alert('Для добавления и изменения данных необходима авторизация')
            popupAddCat.close()
            auth.open()
        //     // console.log("true")
        //     // authTrue()

        } else {
        this.popup.classList.add('popup_active');
        document.addEventListener('keyup', this._handleEscUp)
        // }
        // let el = document.querySelector('.`${this._className}`')
        // let el2 = el.document.querySelector('div')
        // console.log(typeof el)
    }
}

    close() {
        let catId = document.querySelector('#inputIdCat')
        // console.log(catId)
        this.popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._handleEscUp)
        closeRegPopup()
        // console.log(e)
        // target.reset();

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

function closeRegPopup() {
    popupHead.innerText = 'Добавить котика'
    popupBtn.innerText = 'Сохранить'

let z = document.querySelectorAll('.form input')
// console.log(z)
for(e of z) {
   e.value = '' 
}
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
}