let btns = document.querySelectorAll(".btn");
let submit=document.getElementById("submit");

btns.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        console.log(buttons.attributes.id.value);
        if(buttons.attributes.id.value=="ui"){
            document.getElementById("uidesign").style.display="block";
            document.getElementById("webdesign").style.display="none";
            document.getElementById("android").style.display="none";
        }
        if(buttons.attributes.id.value=="web"){
            document.getElementById("uidesign").style.display="none";
            document.getElementById("webdesign").style.display="block";
            document.getElementById("android").style.display="none";
        }
        if(buttons.attributes.id.value=="mobile"){
            document.getElementById("uidesign").style.display="none";
            document.getElementById("webdesign").style.display="none";
            document.getElementById("android").style.display="block";
        }
        if(buttons.attributes.id.value=="all"){
            document.getElementById("uidesign").style.display="block";
            document.getElementById("webdesign").style.display="block";
            document.getElementById("android").style.display="block";
        }
    })
})

// cv download button here

function downloadBtn() {
    alert("Your Cv is Downloaded Successfully")
}

submit.addEventListener("click",function(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let msg=document.getElementById("msg");

    if(name.value==""||email.value==""||msg.value==""){
        alert("Please Fill all Detail")
    }
    else
    {
        alert("Thanks for connecting")
    }
})
