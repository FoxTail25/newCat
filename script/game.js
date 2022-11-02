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
return a
 
}


// отображени количества пойманых рыбок


// function fishCount() {
    // let am = cnt3
    // console.log(cnt)
    // luckyFishCount.innerText = `Вы поймали ${am}`
// }