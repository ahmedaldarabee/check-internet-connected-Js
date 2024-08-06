let title = document.querySelector(".title h3");
let list  = document.querySelector("ul");
let btn   = document.querySelector(".reload");

function updateStatus(){
    if(navigator.onLine){
        onLineIN();
    }else{
        offLineIN();
    }
}

btn.onclick = function(){
    window.location.reload();
}

window.addEventListener("online",function(){
    onLineIN();
})

window.addEventListener("offline",function(){
    offLineIN();
})

function onLineIN(){
    title.innerHTML = 'online now';
    title.style.color='green';

    list.classList.add("hidden");
    btn.classList.add("hidden");
}

function offLineIN(){
    title.innerHTML = 'offline now';
    title.style.color='black';

    list.classList.remove("hidden");
    btn.classList.remove("hidden");
}

updateStatus();