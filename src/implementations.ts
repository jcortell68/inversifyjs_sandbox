import "reflect-metadata";
import { inject, injectable, multiInject, named, optional, tagged } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    private weapons: IWeapon[];

    constructor(
        @inject(TYPES.IWeaponFactory) private weaponFactory: () => IWeapon
    ) {
        console.log("MarvelCharacter instantiated");

        // Call the factory to get a bunch of weapons
        this.weapons = [];
        for (let i = 0; i < 5; i++) {
            this.weapons.push(weaponFactory());
        }
    }

    fight(): void {
        for (let weapon of this.weapons) {
            weapon.useit();
        }
    }

    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class Hammer implements IWeapon {
    useit(): void {
        console.log("Hammer swung!")
    }
}

@injectable()
export class Sword implements IWeapon {
    useit(): void {
        console.log("Sword lunged!")
    }
}

@injectable()
export class NerfGun implements IWeapon {
    useit(): void {
        console.log("NERF gun fired!")
    }
}
