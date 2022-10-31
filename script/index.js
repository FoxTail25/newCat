
const cardContainer = document.querySelector('.cards'); // Контейнер, куда добавляем котиков из массива
const btnAddCat = document.querySelector('#add') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
// const btnRegCat = document.querySelector('#reg') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const btnLogin = document.querySelector('#btnAuth') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const formAddCat = document.querySelector('#popup-form-add-cat') //доступ к форме с данными
const formLogin = document.querySelector('#popup-form-login') //доступ к форме авторизации
const btn_deleteCat = document.querySelector('#btnDeleteCat')


import { formRegCat, Popup } from "./popup.js"
import { api } from "./api.js"
import { Card } from "./card.js"

function checkForm(elements) { //функция проверки сборки данных из формы
    const formData = {};
    elements.forEach(input => {
        if (input.type === 'submit') return; // отсеивание сабмита

        if (input.type !== 'checkbox') { //добавляем НЕчекбокс
            formData[input.name] = input.value;
        };
        if (input.type === 'checkbox') {
            formData[input.name] = input.checked; //добавление чекбокса со значение true
        };

    })
    return formData
}

// console.log(elementsFotmCat)


function handelFormLogin(e) {
    e.preventDefault()

    const elementsFormCat = [...formLogin.elements]; //получаем массив элементов формы
    const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы
    console.log(dataFromForm)
    Cookies.set('email', `email=${dataFromForm.email}`)
    // document.cookie = `email=${dataFromForm.email};max-age=60`
    auth.close()

}

function handelFormAddCat(e) {
    e.preventDefault()

    const elementsFormCat = [...formAddCat.elements]; //получаем массив элементов формы
    const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы
    console.log(dataFromForm)

    // console.log("ничего не отправляем")
    api.addNewCat(dataFromForm)
        .then(() => {
            createCat(dataFromForm)
        })
    popupAddCat.close() //закрываем попАп
}

function handelFormRegCat(e) {
    e.preventDefault() // отменить действие по умолчанию
    const elementsFormCat = [...formRegCat.elements]; //получаем массив элементов формы
    const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы

    for (let el in dataFromForm) {
        if (dataFromForm[el] === "") {
            delete dataFromForm[el]  // убираем пустые поля из объекта
        }
    }

    // console.log(dataFromForm)
    // console.log(dataFromForm.id)

    let a = JSON.parse(localStorage.cats) // Получаем объкт с котиками из Локального хранилища.
    let b;
    // console.log(typeof a)
    // console.log(a)
    a.forEach((i)=>{
        if(i.id == dataFromForm.id){
            b = i
        }
    });
    
    for (let i in dataFromForm) {
        
        // console.log(b[i], dataFromForm[i])
        if(dataFromForm[i] != b[i]) {
            b[i] = dataFromForm[i]
            console.log(b[i])
            a[b] = b
            let c = JSON.stringify(a)
            // console.log(a[b])
            delete localStorage.cats;
            localStorage.setItem('cats', c)
            console.log(localStorage.cats)
            
            
            const newLocalData = JSON.parse(localStorage.getItem('cats'));
            
            
            // newLocalData.forEach(function (el) {
            //     createCat(el)
            //     // console.log('')
            // })

         }

    
    


    // if(dataFromForm.b[i]) {console.log('true')}
    // console.log(b[i])
    // console.log(a.b[i])
    }






    api.updateCat(dataFromForm, dataFromForm.id);
    e.target.reset();
    popupRegCat.close() //закрываем попАп


    // formAddCat.removeEventListener('submit', handelFormRegCat)
    // formAddCat.addEventListener('submit', handelFormAddCat)
    // let test = document.querySelector(`.cardId${dataFromForm.id} .card__name`)
    // console.log(test.innerHTML)
    // test.innerHTML = dataFromForm.name
}

function handelDeleteCat() {
    // e.preventDefault
    // elementsFormCat
    const elementsFormCat = [...formRegCat.elements];
    const dataFromForm = checkForm(elementsFormCat) 
    console.log(dataFromForm.id);

    api.deleteCat(dataFromForm, dataFromForm.id);
    popupRegCat.close();
}

function refreshDate(min) {
    const setTime = new Date(new Date().getTime() + min * 6000)
    localStorage.setItem('dataRefresh', setTime)
}

function checkLocalStorage() {
    // console.log(localData)
    const getTimeAgo = localStorage.getItem('dataRefresh')
    const localData = JSON.parse(localStorage.getItem('cats'));

    if (localData && localData.length && (new Date() < new Date(getTimeAgo))) {
        localData.forEach(function (el) {
            createCat(el)
        })
    } else {
        api.getAllCats()
            .then(({ data }) => {
                data.forEach(function (el) {
                    createCat(el);
                    
                })
                localStorage.setItem('cats', JSON.stringify(data))
                refreshDate(1)
            })
            
    }
}

checkLocalStorage()



function createCat(catData) {
    
    
    const cardInstans = new Card(catData, '#card-template')// создать карточку из данных
    const newCardElement = cardInstans.getElement();
    // newCardElement.addEventListener('click', () => popupInfoCat.open(catData, 'info'))
    // newCardElement.querySelector('.card__link').addEventListener('click', () => popupRegCat.open(catData, 'reg'))
    // console.log(this)
    // console.log(as)
    cardContainer.append(newCardElement)// добавить карточку на страницу
}
// api.getAllCats() // Получаем список котиков с сервера
//     .then(({ data }) => { // получаем массив с объектами
//         // console.log(data)
//         data.forEach(function (el) {
    //             createCat(el)  // создаём карточку котика из каждого элемета массива
    //         })
    //     })
    
    // function updateCat(catData, id) {
        
        
        //     // const cardInstans = //получить данные карты из формы
        // //     // new Card(catData, '#card-template')// создать карточку из данных
        //     // const newCardElement = cardInstans.getElement();
        //     // newCardElement.addEventListener('click', CreatePopupReg)
        //     // cardContainer.append(newCardElement)// добавить карточку на страницу
        // }
        
        // console.log(a)
        
        
        // ПопАп /////////////////////////////////////////////////////////
        
        const popupAddCat = new Popup('popup-add-cats')
        popupAddCat.setEventListener();
        
        const auth = new Popup('popup-login')
        auth.setEventListener();
        
        export const popupRegCat = new Popup('popup-reg-cats')
        popupRegCat.setEventListener();
        
        export const popupInfoCat = new Popup('popup-info-cats')
        popupInfoCat.setEventListener();
        
        btnAddCat.addEventListener('click', () => popupAddCat.open())
        formAddCat.addEventListener('submit', handelFormAddCat)
        formLogin.addEventListener('submit', handelFormLogin)
        formRegCat.addEventListener('submit', handelFormRegCat)
        btn_deleteCat.addEventListener('click', handelDeleteCat,)
        
        
        
        btnLogin.addEventListener('click', () => auth.open())
        
        
        
        
// popupAddCat.close()
// popupAddCat.open()
// console.log(popupAddCat)

///// замена лого ////

logoLink.addEventListener('mouseover', () => changeOver())
logoLink.addEventListener('mouseleave', () => changeLiave())

// Cookies.set('password', '1234567')

// export const isAuth = Cookies.get('email');

// console.log(isAuth)
// // function authTrue(){
//     if(!isAuth ) {
    
// //     popupAddCat.close()
// //     // auth.open()
    
//     formAddCat.classList.add('visually-hidden')
// } 
// }

// else {
//     // formAddCat.classList.remove('visually-hidden')
// }


// console.log(document.cookie)

