
// alert('Для того что бы поймать рыбку, просто тапните или кликните по ней. Что бы добавить / редактировать или удаять котиков из базы, надо в правом верхнем углу экрана нажать на кнопку "Войти". После этого ввести любой Емаил (авторизации нет)')

export function handelFish() {
    const fishElement = document.querySelectorAll('.fish')
    for (let e of fishElement) {
        e.addEventListener('click', (e) => {
            
            count()
            let a = e.target.parentElement
            a.classList += " invisible";
            setTimeout(() => {

                return a.classList.remove("invisible")

            }, 3000)
        }
        )
    }
}

let a = 0
const luckyFishCount = document.querySelector('.count')

function count() {

    a++

    luckyFishCount.innerHTML = `<div> Вы поймали ${a} <i class="fa-solid fa-fish-fins fish_for_count"></i></div>`;

    switch (a) {
      
        case 5: alert("Браво! Уже 5");
            break
        case 9: alert("9! Да вы прирожденный рыбак!");
            break
        case 15: alert("Глядя на ваши успехи, профессиональные рыбаки нервно курят в сторонке и подумывают стать программистами");
            break
        case 20: alert("Это новый рекорд! Вы превзошли все ожидания))");
            break
        case 30: alert("Рыбу можно ловить бесконечно!))");
            break
    }


    return a

}
