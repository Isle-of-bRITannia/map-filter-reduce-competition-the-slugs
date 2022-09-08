import allTransactions from './all_transactions.json';
import botwData from './botw_data.json';
import botwEquipment from './botw_equipment_cleaned.json';
import botwMonsters from './botw_monsters_cleaned.json';


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

const equipment: Equipment[] = botwEquipment;
const monsters: Monster[] = botwMonsters;
const materials: Material[] = botwData.data.materials;
