let CityName = document.querySelector('.current-place');
let AllPath = document.querySelectorAll('.map path');

AllPath.forEach(function(x){
    x.addEventListener("mouseover",function(){
    CityName.innerText = x.getAttribute('title');
        
    });
})