const ANIMAL_TYPE = {
    DOG: 'dog',
    CAT: 'cat',
    FROG: 'frog',
}

const createAnimal = (name) => ({ name });
const createDog = (animal) => ({ animal, sayHi: () => { console.log('WOOF WOOF!! I AM ', animal.name) } });
const createFrog = (animal) => ({ animal, sayHi: () => { console.log('QUA QUA!! I AM ', animal.name) } });
const createCat = (animal) => ({ animal, sayHi: () => { console.log('MEAOW!! I AM ', animal.name) } });

const animalFactory = (type, name) => {
    const animal = createAnimal(name);

    const FACTORY = {
        [ANIMAL_TYPE.DOG] : () => { return createDog(animal) },
        [ANIMAL_TYPE.CAT] : () => { return createCat(animal) },
        [ANIMAL_TYPE.FROG] : () => { return createFrog(animal) },
    }

    return FACTORY[type]();
}

const cat = animalFactory(ANIMAL_TYPE.CAT, 'Garfield');
const dog = animalFactory(ANIMAL_TYPE.DOG, 'Rax');
const frog = animalFactory(ANIMAL_TYPE.FROG, 'Crazy frog');

cat.sayHi();
dog.sayHi();
frog.sayHi();