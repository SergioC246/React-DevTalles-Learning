
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks })


const returnsArrayFn = () => {
    return ['ABC', 123] as const; // IMPORTANTE: Si aregamos as const le decimos a TS que la estructura siempre va a ser la misma, en esta caso un string en la primera posición y un number en la segunda.
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);


// Tarea

const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
        console.log(newValue);
        },
    ] as const; 
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');