
const cardContainer = document.querySelector('.cards'); // Контейнер, куда добавляем котиков из массива
const btnAddCat = document.querySelector('#add') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const btnLogin = document.querySelector('#btnAuth') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
// const btnClosePopup = document.querySelector('#popupClose') 
const formCatAdd = document.querySelector('#popup-form-cat') //доступ к форме с данными
const formLogin = document.querySelector('#popup-form-login') //доступ к форме авторизации

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
    // Cookies.set('email', `email=${dataFromForm.email}`)
    // document.cookie = `email=${dataFromForm.email};max-age=60`
    auth.close()

}

function handelFormAddCat(e) {
    e.preventDefault()

    const elementsFormCat = [...formCatAdd.elements]; //получаем массив элементов формы
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
    const elementsFormCat = [...formCatAdd.elements]; //получаем массив элементов формы
    const dataFromForm = checkForm(elementsFormCat) // запускаем функцию проверки формы

    for (el in dataFromForm) {
        if (dataFromForm[el] === "") {
            delete dataFromForm[el]  // убираем пустые поля из объекта
        }
    }

    // console.log(dataFromForm)

    // console.log(dataFromForm.id)

    api.updateCat(dataFromForm, dataFromForm.id)
    e.target.reset();
    popupAddCat.close() //закрываем попАп


    formCatAdd.removeEventListener('submit', handelFormRegCat)
    formCatAdd.addEventListener('submit', handelFormAddCat)
    let test = document.querySelector(`.cardId${dataFromForm.id} .card__name`)
    // console.log(test.innerHTML)
    test.innerHTML = dataFromForm.name
}

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem('cats'));
console.log(localData)
    if (localData && localData.length) {
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
            })
    }
}

checkLocalStorage()

// api.getAllCats() // Получаем список котиков с сервера
//     .then(({ data }) => { // получаем массив с объектами
//         // console.log(data)
//         data.forEach(function (el) {
//             createCat(el)  // создаём карточку котика из каждого элемета массива
//         })
//     })

function createCat(catData) {


    const cardInstans = new Card(catData, '#card-template')// создать карточку из данных
    const newCardElement = cardInstans.getElement();
    // newCardElement.addEventListener('click', CreatePopupReg)
    cardContainer.append(newCardElement)// добавить карточку на страницу
}
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

btnAddCat.addEventListener('click', () => popupAddCat.open())
formCatAdd.addEventListener('submit', handelFormAddCat)
formLogin.addEventListener('submit', handelFormLogin)

btnLogin.addEventListener('click', () => auth.open())




// popupAddCat.close()
// popupAddCat.open()
// console.log(popupAddCat)

///// замена лого ////

logoLink.addEventListener('mouseover', () => changeOver())
logoLink.addEventListener('mouseleave', () => changeLiave())

Cookies.set('password', '1234567')

console.log(document.cookie)