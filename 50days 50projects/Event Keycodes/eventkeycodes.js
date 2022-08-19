const insert = document.getElementById('insert');



window.addEventListener('keydown', (Event) =>{
    console.log(Event);

    insert.innerHTML = `

    <div class="key">
    ${Event.key === ' '? "Space" : Event.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${Event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${Event.code}
    <small>event.Code</small>
    </div>
    `;
})