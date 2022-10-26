
// GET https://sb-cats.herokuapp.com/api/show - отобразить всех котиков
// GET https://sb-cats.herokuapp.com/api/ids - отобразить все возможные айди котиков
// GET https://sb-cats.herokuapp.com/api/show/:id  - отобразить конкретного котика
// POST https://sb-cats.herokuapp.com/api/add - добавить котика
// PUT https://sb-cats.herokuapp.com/api/update/:id - изменить информацию о котике
// DELETE  https://sb-cats.herokuapp.com/api/:id - удалить

const CONFIG_API = {
    url: 'https://sb-cats.herokuapp.com/api/2/grigoricat/',
    headers: {
        'Content-type': 'application/json'
    }
}

class Api {
    constructor(config){
        this._url = config.url;
        this._headers = config.headers;
        // console.log('API');
    }

    _onResponse(res){  // Ответ сервера
        return res.ok ? res.json(): Promise.reject({...res, message: "Ошибка на стороне сервера"});
    }
    getAllCats(){
        return fetch(`${this._url}show`, {
            method: 'GET'
        }).then(this._onResponse)
    }

    addNewCat(data){
        return fetch(`${this._url}add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this._headers
        }).then(this._onResponse)
    }
}

const api = new Api(CONFIG_API);
