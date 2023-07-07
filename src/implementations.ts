import "reflect-metadata";
import { inject, injectable } from "inversify";
import { ISuperhero, IToy, IWeapon, TYPES } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) private weapon: IWeapon,
        @inject(TYPES.IToy) private toy: IToy
    ) {
        console.log("MarvelCharacter instantiated");
    }

    fight(): void {
        this.toy.useit()
        this.weapon.useit()
    }

    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class DcCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) private weapon: IWeapon,
    ) {
        console.log("DcCharacter instantiated");
    }

    fight(): void {
        this.weapon.useit()
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
