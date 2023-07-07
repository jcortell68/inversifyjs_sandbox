import "reflect-metadata";
import { inject, injectable } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class Catchphrase {
    sayit() : void {
        console.log("Here I come to save the day!");
    }
}

@injectable()
export class MarvelCharacter implements ISuperhero {
    private weapon: IWeapon;

    constructor(
        @inject(TYPES.IWeaponFactory) private weaponFactory: () => IWeapon,
        private catchphrase : Catchphrase
    ) {
        console.log("MarvelCharacter instantiated");

        this.weapon = weaponFactory();
    }
    speak(): void {
        this.catchphrase.sayit()
    }

    fight(): void {
        this.weapon.useit();
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
