/* La desestructuración en TypeScript (y JS) es una sintaxis concisa 
que permite extraer propiedades de objetos o elementos de arrays
y asignarlos a variables individuales de forma rápida y legible */

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};
const { key, name:ironmanName, age } = person;   // Cuando declaramos una const con {} le estamos diciendo a Ts que estamos desestructurando
console.log({ ironmanName, age, key })


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero ) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    };
};

const { 
    rank, 
    keyName,
    user,
} = useContext(person);

const { name } = user;

console.log({ rank, keyName, name })
