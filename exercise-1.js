// Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.


function randomNumbers () {
    let minimun = 1;
    let maximun = 30;
    let arrayRandom = [];

    for(let i = 1; i <= 10; i ++) {         
        let number = Math.floor(Math.random() * (maximun - minimun) + minimun);
        arrayRandom.push(number);
    }
    console.log('Random numbers ==>', arrayRandom)

}

randomNumbers();