import allTransactions from './all_transactions.json';
import botwData from './botw_data.json';
import botwEquipment from './botw_equipment_cleaned.json';
import botwMonsters from './botw_monsters_cleaned.json';


type Monster = {
    category: string,
    common_locations: string[],
    description: string,
    drops: string[],
    id: number,
    image: string,
    name: string
};

type Material = {
    category: string,
    common_locations: string[],
    cooking_effect: string,
    description: string,
    hearts_recovered: number,
    id: number,
    image: string,
    name: string
};

type Equipment = {
    category: string,
    common_locations: string[],
    description: string,
    id: number,
    name: string,
    image: string,
    attack: number,
    defense: number
};

const monsters: Monster[] = botwMonsters;
const materials: Material[] = botwData.data.materials;
const equipment: Equipment[] = botwEquipment;


const locationsOutput: any = {}


for (let i = 0; i < monsters.length; i++) {
    for (let j = 0; j < monsters[i].common_locations.length; j++) {
        let b = monsters[i];
        let c = b.common_locations;

        if (locationsOutput[c[j]] === undefined)
            locationsOutput[b.common_locations[j]] = [];

        let a = locationsOutput[b.common_locations[j]];
        a.push({
            category: b.category,
            descriptions: b.description,
            drops: monsters[i].drops,
            image: monsters[i].image,
            name: monsters[i].name
        });
    }
}

//console.log(locationsOutput);

const newLocationsOutput: any = {};

const locations = monsters.reduce((cul, monster) => {
    for(let monsterLocation of monster.common_locations) {
        if (cul[monsterLocation] === undefined)
            cul[monsterLocation] = [];
            
        cul[monsterLocation].push({
            category: monster.category,
            descriptions: monster.description,
            drops: monster.drops,
            image: monster.image,
            name: monster.name
        })
    }
    return cul;
}, newLocationsOutput);

console.log(newLocationsOutput);