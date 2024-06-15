// const nodeCard = document.querySelectorAll('.main-cards-items')
// console.log(nodeCard)
// nodeCard.forEach(function(card){
//     card.addEventListener('click',function(){
//         card.style.backdropFilter = 'blur(50px)',
//         card.style.background = 'rgba(40, 48, 54, 0.6)'
//     })
    
// })
const hiddenCard = document.getElementById('hidden-main-card')

const loadMore = document.getElementById('loadMore')
function handleLoadMoreCard(){
    hiddenCard.classList.toggle('hidden')
}
loadMore.addEventListener('click',handleLoadMoreCard)

