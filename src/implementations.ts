import "reflect-metadata";
import { inject, injectable, tagged } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) @tagged("lethal", true) private lethal_weapon: IWeapon,
        @inject(TYPES.IWeapon) @tagged("lethal", false) private woosie_weapon: IWeapon,
    ) {
        console.log("MarvelCharacter instantiated");
    }

    fight(toKill: boolean): void {
        if (toKill) {
            this.lethal_weapon.useit()
        }
        else {
            this.woosie_weapon.useit()
        }
    }

    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class Hammer implements IWeapon {
    useit(): void {
        console.log("Hammer swung! Call the morgue.")
    }
}

@injectable()
export class Sword implements IWeapon {
    useit(): void {
        console.log("Sword lunged! Call the priest.")
    }
}

@injectable()
export class NerfGun implements IWeapon {
    useit(): void {
        console.log("NERF gun fired! Did you feel it?")
    }
}
