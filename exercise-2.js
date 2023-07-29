// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

function arrayTransform (string) {
    let arrayNumbers = string.split(',').map(item => parseInt(item));
    console.log(arrayNumbers);
}

arrayTransform("1,2,3,4,5");