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

    play(): void {
        this.toy.play();
    }

    fight(): void {
        this.weapon.useit();
    }

    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class DcCharacter implements ISuperhero {
    constructor(
        @inject(TYPES.IWeapon) private weapon: IWeapon,
        @inject(TYPES.IToy) private toy: IToy
    ) {
        console.log("DcCharacter instantiated");
    }
    play(): void {
        this.toy.play();
    }

    fight(): void {
        this.weapon.useit()
    }

    origin(): void {
        console.log("I hail from a publishing corporation");
    }
}

@injectable()
export class Hammer implements IWeapon, IToy {
    play(): void {
        console.log("Hammer swung slowly!")
    }
    useit(): void {
        console.log("Hammer swung!")
    }
}

@injectable()
export class Sword implements IWeapon, IToy {
    play(): void {
        console.log("Sword jabbed gently!")
    }
    useit(): void {
        console.log("Sword thrusted!")
    }
}
