function alertSomething() {
    alert("Hello, World!");
}

function doSomething() {
    console.log("Doing something...");
    const B = document.getElementById("nappi")
    const V = document.getElementById("viesti")
    const P = document.getElementById("password")
    B.addEventListener("click",()=>{
        if (B.textContent === "piilota"){
        V.style.display = "none";
        B.textContent = "näytä"
        }
        else if (B.textContent === "näytä" && P.value === "LeoIsStupid"){
            V.style.display = "flex";
            B.textContent = "piilota"
        }
    })
    
}
alertSomething()
doSomething()