import { popupInfoCat, popupRegCat } from "./index.js";

export class Card {
    constructor(dataCat, selectorTemplate ) {
        this._data = dataCat;
        this._selectorTemplate = selectorTemplate;
    }
    
    _getTempate(){ //возвращает содержимое шаблона в видел DOM узла
        return document.querySelector(this._selectorTemplate).content.querySelector('.card');
    }

    getElement() {
        this.element = this._getTempate().cloneNode(true); //клонируем полученное содержимое из шаблона
        const cardTitle = this.element.querySelector('.card__name'); //получаем имя объекта
        const cardImage = this.element.querySelector('.card__image');
        const cardLike = this.element.querySelector('.card__like');
        const cardId = this._data.id
        if (!this._data.favourite){
            cardLike.style.color = 'white'
        }

        cardTitle.textContent = this._data.name;
        cardImage.src = this._data.img_link;
        // cardImage.alt = `img card id ${this._data.id}`;
        this.element.className = this.element.className + " " + `cardId${cardId}`
        cardImage.addEventListener('click', ()=> popupInfoCat.open(this._data, 'info'))
        cardTitle.addEventListener('click', ()=> popupRegCat.open(this._data, 'reg'))
        // cardLike.addEventListener('click', ()
        return this.element;
    }
}

// const card = new Card(cats[0], '#card-template').getElement()
// cl(card)

// const template = document.querySelector('#card-template').content.querySelector('.card');
// console.dir(template) //console.dir () Отображает интерактивный список свойств указанного объекта JavaScript.


function like() {
    console.log(this)
    //.querySelector())
}






// function cl(a){
//     console.log(a)
// }