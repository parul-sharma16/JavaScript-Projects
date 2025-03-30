const button=document.querySelectorAll('.btn');
const body = document.querySelector("body");

button.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const ch=e.target.id;
        switch(ch){
            case "blue":
                body.style.backgroundColor=e.target.id;
                break;
            case "green":
                body.style.backgroundColor=e.target.id;
                break;
            case "red":
                body.style.backgroundColor=e.target.id;
                break;
            case "palevioletred":
                body.style.backgroundColor=e.target.id;
                break;
            

        }

    })
})

