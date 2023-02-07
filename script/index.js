
const cardContainer = document.querySelector('.cards'); // Контейнер, куда добавляем котиков из массива
const btnAddCat = document.querySelector('#add') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const btnLogin = document.querySelector('#btnAuth') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const formAddCat = document.querySelector('#popup-form-add-cat') //доступ к форме с данными
const formLogin = document.querySelector('#popup-form-login') //доступ к форме авторизации
const btn_deleteCat = document.querySelector('#btnDeleteCat')


import { formRegCat, Popup } from "./popup.js"
import { api } from "./api.js"
import { Card } from "./card.js"
import { handelFish } from "./game.js";

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
    // console.log(dataFromForm)

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

    let catsInlocalStorage = JSON.parse(localStorage.cats) // Получаем объкт с котиками из Локального хранилища.
    let catIdFromLocalStoradge;

    for (let el in dataFromForm) {

        if (dataFromForm[el] === "") {

            delete dataFromForm[el]  // убираем пустые поля из объекта
        }
        catsInlocalStorage.forEach((i) => {
            if (i.id == dataFromForm.id) {
                catIdFromLocalStoradge = i
            }
        });
    }



    for (let i in dataFromForm) {

        // console.log(b[i], dataFromForm[i])
        if (dataFromForm[i] != catIdFromLocalStoradge[i]) {
            catIdFromLocalStoradge[i] = dataFromForm[i]

            catsInlocalStorage[catIdFromLocalStoradge] = catIdFromLocalStoradge
            let c = JSON.stringify(catsInlocalStorage)
            console.log(catsInlocalStorage)
            localStorage.setItem('cats', JSON.stringify(catsInlocalStorage)) //сохранить в локалСторадж изменения

            let a = document.querySelector('.cards')
            a.innerHTML = '' // очистить контейнер с карточками

            const newLocalData = JSON.parse(localStorage.getItem('cats')); // наполнить контейнер заново
            newLocalData.forEach(function (el) {
                createCat(el)
            })

        }
    }





    api.updateCat(dataFromForm, dataFromForm.id);
    e.target.reset();
    popupRegCat.close() //закрываем попАп

}





function handelDeleteCat(e) {
    e.preventDefault()
    // const elementsFormCat = [...formRegCat.elements]; //получаем массив элементов формы
    // const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы
    // api.deleteCat()

    // console.log(dataFromForm.id)
    const catId = e.target.parentElement[0].value;
    console.log(catId)

    api.deleteCat(catId) //Удаление карточки котика с сервера.
        .then((res) => console.log(res));

    let cats = JSON.parse(localStorage.getItem('cats'))
    console.log(cats)
    let newCats = [];
    for (let item of cats) {
        if (item.id != catId) {
            newCats.push(item)

        }
    }
    console.log(newCats)
    newCats = JSON.stringify(newCats)
    localStorage.removeItem('cats')
    localStorage.setItem('cats', newCats)

    let a = document.querySelector('.cards')
    a.innerHTML = '' // очистить контейнер с карточками
    const newLocalData = JSON.parse(localStorage.getItem('cats')); // наполнить контейнер заново
    newLocalData.forEach(function (el) {
        createCat(el)
    })


    popupRegCat.close();


}

function refreshDate(min) {
    const setTime = new Date(new Date().getTime() + min * 6000)
    localStorage.setItem('dataRefresh', setTime)
}

let firstLoad = 0;

function checkLocalStorage() {

    const getTimeAgo = localStorage.getItem('dataRefresh');
    const localData = JSON.parse(localStorage.getItem('cats'));

    // console.log(localData, "первая проверка локалСторадж")
    // if (localData && localData.length && (new Date() > new Date(getTimeAgo)) && firstLoad > 0) {
    if (firstLoad > 0) {
        localData.forEach(function (el) {
            createCat(el)
        });
        // console.log(firstLoad, "загрузка из локалСторадж")
    } else {
        api.getAllCats()
            .then(({ data }) => {
                data.forEach(function (el) {
                    createCat(el);
                })
                // console.log(data)
                // console.log(localData, "отработал апи")
                firstLoad++
                // console.log(firstLoad,"Загрузка из апи")
                localStorage.setItem('cats', JSON.stringify(data))
                // console.log(localData, "данные из апи занесены в локалСторадж")
                refreshDate(30)
            })

    }
}

checkLocalStorage()



function createCat(catData) {

    const cardInstans = new Card(catData, '#card-template')// создать карточку из данных
    const newCardElement = cardInstans.getElement();

    cardContainer.append(newCardElement)// добавить карточку на страницу
}



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


handelFish()
