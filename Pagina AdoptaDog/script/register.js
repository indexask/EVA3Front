

const readFormData= (email,contraseña)=>{
    if (email== "" || contraseña == ""){
        alert("Unos de los campos estan vacios")
    }else if (email== "admin" || contraseña == "admin"){
        alert("Admin registrado exitosamente")
        window.location.href = "../../admin.html"
    }else if (email== "matias" || contraseña == "1602"){
        alert("Usuario registrado exitosamente")
        window.location.href = "../../index.html"
    }else{
        alert("Algunos de los campos son invalidos")
    }
    
}

const button = ()=>{
        const email = document.getElementById("email").value
        const contraseña = document.getElementById("contraseña").value
        console.log(email,contraseña)
        readFormData(email,contraseña) 
    }
