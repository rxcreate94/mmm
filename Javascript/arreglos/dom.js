document.getElementById("boton").addEventListener("click",() => {
    document.getElementById("parrafo").innerText = "¡texto cambiado!";
})
// ejercicio 2: mostrar lo que escribes en tiempo real
document.getElementById("entrada").addEventListener("input",(e) =>{
    document.getElementById("parrafo").innerText = e.target.value;
})

// ejercicio 3: cambiar el color al pasar4 el mouse
document.getElementById("boton").addEventListener("input",(e) =>{
    document.getElementById("boton").style.backgroundcolor = "ligthblue";
});

