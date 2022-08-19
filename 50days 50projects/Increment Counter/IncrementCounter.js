const counters = document.querySelectorAll('.counter');

counters.forEach(counters =>{
    counters.innerText = '0';

   const updateCounter = () => {
        const target = +counters.getAttribute('data-target');
        const c =+counters.innerText;

        const increment = target / 700;

        if(c < target){
            counters.innerText  = `${Math.ceil(c + increment) }`
            setTimeout(updateCounter, 1);
        }else{
            counters.innerText = target
        }
    }

    updateCounter()
})