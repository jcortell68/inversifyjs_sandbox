import "reflect-metadata";
import { inject, injectable } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) private weapon: IWeapon
    ) {
        console.log("MarvelCharacter instantiated");
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
