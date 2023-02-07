
// alert('Для того что бы поймать рыбку, просто тапните или кликните по ней. Что бы добавить / редактировать или удаять котиков из базы, надо в правом верхнем углу экрана нажать на кнопку "Войти". После этого ввести любой Емаил (авторизации нет)')

export function handelFish() {
    const fishElement = document.querySelectorAll('.fish')
    // console.log(fishElement)
    for (let e of fishElement) {
        // let cnt = 0
        e.addEventListener('click', (e) => {

          count()  

            let a = e.target.parentElement
            a.classList += " invisible";
            setTimeout(() => {
                

                return a.classList.remove("invisible")
                // console.log(a)
            }, 3000)
            
        }
        // console.log('bingo',a);
        //  e.path[1].classList
        //    console.log(e.path[1].classList.value)
        // console.log(e.path)
        )
    }
}

let a = 0
const luckyFishCount = document.querySelector('.count')

function count() {
   
a++
console.log(a)
luckyFishCount.innerHTML = `Вы поймали ${a}`

switch (a) {
    case 2: alert("Мои поздравления вы поймали больше одной рыбки!");
    break
    case 5: alert("Браво! Уже 5");
    break
    case 9: alert("9! Да вы прирожденный рыбак!");
    break
    case 15: alert("Глядя на ваши успехи, профессиональные рыбаки нервно курят в сторонке и подумывают стать программистами");
    break
    case 20: alert("Это новый рекорд! Вы превзошли все ожидания))");
    break
}


return a
 
}


// отображени количества пойманых рыбок


// function fishCount() {
    // let am = cnt3
    // console.log(cnt)
    // luckyFishCount.innerText = `Вы поймали ${am}`
// }