const smallCups = document.querySelectorAll('.small-cup');
const litress = document.getElementById('.litres');
const remaineds = document.getElementById('.remained');
const percentages = document.getElementById('.percentage');
const bigCup = document.getElementsByClassName('.cup');

updateBigCup();

smallCups.forEach((cup, IDBIndex)=>{

    cup.addEventListener('click', () => {highlightCups(IDBIndex)});
})

function highlightCups(IDBIndex){

    if (IDBIndex===7 && smallCups[IDBIndex].classList.contains("full")) IDBIndex--;
    else if(smallCups[IDBIndex].classList.contains('full') && !smallCups[IDBIndex].nextElementSibling.classList.contains('full')) {
        IDBIndex--
    }

    smallCups.forEach((cup, IDBIndex2) => {
        if(IDBIndex2 <= IDBIndex) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.small-cup.full').length;
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility='hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility='visible'; 
        percentage.style.height = `${fullCups/totalCups * 330}px`;
        percentage.innerText= `${fullCups/totalCups *100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        

    }else{
        remained.style.visibility = 'visible';
        litres.innerText = `${2-(250 * fullCups/ 1000)}L`

    }


    
}
