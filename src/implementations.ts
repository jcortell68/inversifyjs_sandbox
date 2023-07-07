import "reflect-metadata";
import { inject, injectable, optional } from "inversify";
import { ISuperhero, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) @optional() private weapon: IWeapon
    ) {
        console.log("MarvelCharacter instantiated");
    }

    fight(): void {
        if (this.weapon) {
            this.weapon.useit()
        }
        else {
            console.log("I'm a pacifist; I don't have a weapon")
        }
    }

    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class DcCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) @optional() private weapon: IWeapon
    ) {
        console.log("DcCharacter instantiated");
    }

    fight(): void {
        if (this.weapon) {
            this.weapon.useit()
        }
        else {
            console.log("I'm a pacifist; I don't have a weapon")
        }
    }

    origin(): void {
        console.log("I hail from a publishing corporation");
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
        console.log("Sword thrusted!")
    }
}
