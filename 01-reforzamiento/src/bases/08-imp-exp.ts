import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });
    return hero;
};

console.log(getHeroById(4))

export const getHeroesByOwner = (owner: Owner) => {

    const heroesByOwner = heroes.filter(
        (hero) => hero.owner === owner);
        return heroesByOwner
};