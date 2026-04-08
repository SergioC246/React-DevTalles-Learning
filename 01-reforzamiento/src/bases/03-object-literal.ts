interface Person {
    firstName: string;
    lastName: string;
    age: number
    address: {

    }
}

const ironman: Person = {
    firstName: 'Sergio',
    lastName: 'Cordoba',
    age: 37,
    address: {
        postalCode: 'ABC123',
        city: 'Madrid',
    }
};


console.log(ironman)











// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Melissa';
// spiderman.lastName = 'Gutierrez';
// spiderman.age = 22;
// spiderman.address.city = 'Sevilla';

// console.log(ironman, spiderman);