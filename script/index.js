
const cardContainer = document.querySelector('.cards'); // Контейнер, куда добавляем котиков из массива
const btnAddCat = document.querySelector('#add') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
// const btnClosePopup = document.querySelector('#popupClose') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика
const formCatAdd = document.querySelector('#popup-form-cat') // кнопка на которую вешаем слушатель для открытия ПопАпа для добавления нового котика

function serializeForm(elements){ //функция проверки сборки данных из формы
    const formData = {};
    elements.forEach( input => {
        if(input.type === 'submit') return; // отсеивание сабмита
        
        if(input.type !== 'checkbox') { //добавляем НЕчекбокс
            formData[input.name] = input.value;
        };
        if(input.type === 'checkbox') {
            formData[input.name] = input.checked; //добавление чекбокса со значение true
        };
        
    })
    return formData
}

// console.log(elementsFotmCat)


function handelFormAddCat(e) {
    e.preventDefault()
    // собрать данные из формы
    const elementsFormCat = [...formCatAdd.elements]; //получаем массив элементов формы
    const dataFromForm = serializeForm(elementsFormCat) // запускаем функцию проверки формы
    
    console.log(dataFromForm)
    cats.push(dataFromForm)
          
     const cardInstans = new Card(dataFromForm, '#card-template')// создать карточку из данных
     const newCardElement = cardInstans.getElement();
     cardContainer.append(newCardElement)// добавить карточку на страницу

     popupAddCat.close() //закрываем попАп
}


// Добавляем котиков из массива
cats.forEach(function(catData) {
    
    const cardInstans = new Card(catData, '#card-template')
    const newCardElement = cardInstans.getElement();
    cardContainer.append(newCardElement)
});

// ПопАп /////////////////////////////////////////////////////////
const popupAddCat = new Popup('popup-add-cats')
popupAddCat.setEventListener();


btnAddCat.addEventListener('click', ()=> popupAddCat.open())
formCatAdd.addEventListener('submit', handelFormAddCat)

// popupAddCat.close()
// popupAddCat.open()
// console.log(popupAddCat)

///// замена лого ////

logoLink.addEventListener('mouseover',() => changeOver())
logoLink.addEventListener('mouseleave',() => changeLiave())