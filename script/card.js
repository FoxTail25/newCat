class Card {
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
        const cardIdout = this.element.querySelector('.card__id')
        const cardClass = this.element.className
        const cardId = this._data.id
        // cl(cardId)
        // cardClass + " "+cardClass)
        if (!this._data.favourite){
            cardLike.remove()
        }

        cardTitle.textContent = this._data.name;
        cardImage.src = this._data.img_link;
        cardImage.alt = `img card id ${this._data.id}`;
        cardIdout.innerText = this._data.id
        this.element.className = cardClass + " " + `cardId${cardId}`
        // this.className


        return this.element;
    }
}

// const card = new Card(cats[0], '#card-template').getElement()
// cl(card)

// const template = document.querySelector('#card-template').content.querySelector('.card');
// console.dir(template) //console.dir () Отображает интерактивный список свойств указанного объекта JavaScript.









function cl(a){
    console.log(a)
}