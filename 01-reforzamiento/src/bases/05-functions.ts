
// Funciones clásicas
function greet(name: string): string {
    return `Hola ${name}`
}
// Funciones clásicas simplificada
// const greet2 = (name: string) => `Hola ${name}`
// Estas tambien son útiles y simplemente se quita el return y las {}  


// Funciones flechas
const greet2 = (name: string): string => {
    return `Hola ${name}`
}
const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

// Ejemplos con objetos
// Funciones clásicas
function getUser() {
    return {
        uid: 'ABC-123',
        username: 'Sergio246'
    };
}
const user = getUser()
console.log(user)

// Funciones flechas
const getUser2 = () => {
    return {
        uid2: 'DEF-456',
        username2: 'Melissa123'
    };
}
// Fuciones flechas simplificadas
// const getUser2 = () => ({
//      uid2: 'DEF-456',
//      username2: 'Melissa123'})
// Estas tambien son útiles y simplemente se quita el return, se agregan () a las {} => ({})  
const user2 = getUser2()
console.log(user2)

// Otro ejemplo de funciones flechas
const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value) =>{
    console.log({ value }) // Si lo ponemos en {} te imprime el nombre + el valor = value: 1, value: 2, etc
})