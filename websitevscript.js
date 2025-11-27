let name="Danish";
console.log("Welcome to the website of "+name);


function nameCheck()


{

    let name = document.getElementById("inputName").value;
    let result = document.getElementById("result");
    if(name === "Danish"){
        result.textContent="Selamat datang, "+name+"!";
        result.style.color="green";
    }else {
        result.textContent="Maaf, nama tidak dikenali.";
        result.style.color="red";
    }



}
