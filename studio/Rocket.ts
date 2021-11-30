import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg : number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        
    }

    sumMass(items: Payload[]): number {
        let totalWeight: number = 0;
        for(let i = 0;i < items.length;i++) {
            totalWeight += items[i].massKg;
        }
        return totalWeight;
    }

    currentMassKg(): number {
        let astroWeight: number = this.sumMass(this.astronauts);
        let cargoWeight: number = this.sumMass(this.cargoItems);
        return astroWeight + cargoWeight;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        } else {
            return false
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }
}