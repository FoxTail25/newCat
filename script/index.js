
const cardContainer = document.querySelector('.cards'); // Контейнер, куда добавляем котиков из массива
const btnAddCat = document.querySelector('#add') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
// const btnClosePopup = document.querySelector('#popupClose') 
const formCatAdd = document.querySelector('#popup-form-cat') //доступ к форме с данными

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
        // .then(() => {
        //     createCat(dataFromForm)
        // })
    popupAddCat.close() //закрываем попАп


    formCatAdd.removeEventListener('submit', handelFormRegCat)
    formCatAdd.addEventListener('submit', handelFormAddCat)
    let test = document.querySelector(`.cardId${dataFromForm.id} .card__name`)
    // console.log(test.innerHTML)
    test.innerHTML = dataFromForm.name
}


// cl(test2.document.querySelector('.card__name'))

// this.cardTitle.textContent = 







api.getAllCats() // Получаем список котиков с сервера
    .then(({ data }) => { // получаем массив с объектами
        // console.log(data)
        data.forEach(function (el) {
            createCat(el)  // создаём карточку котика из каждого элемета массива
        })
    })

function createCat(catData) {


    const cardInstans = new Card(catData, '#card-template')// создать карточку из данных
    const newCardElement = cardInstans.getElement();
    newCardElement.addEventListener('click', CreatePopupReg)
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

btnAddCat.addEventListener('click', () => popupAddCat.open())
formCatAdd.addEventListener('submit', handelFormAddCat)

// popupAddCat.close()
// popupAddCat.open()
// console.log(popupAddCat)

///// замена лого ////

logoLink.addEventListener('mouseover', () => changeOver())
logoLink.addEventListener('mouseleave', () => changeLiave())

