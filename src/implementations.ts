import "reflect-metadata";
import { inject, injectable, multiInject, named, optional, tagged } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor(
        @multiInject(TYPES.IWeapon) private weapons: IWeapon[],
    ) {
        console.log("MarvelCharacter instantiated");
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
