import "reflect-metadata";
import { injectable } from "inversify";
import { IMereMortal, ISuperhero } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero, IMereMortal {
    constructor() {
        console.log("MarvelCharacter instantiated");
    }

    fight(): void {
        console.log("Crushing villains!")
    }

    work() : void {
        console.log("Cranking out code!")
    }
}

@injectable()
export class DcCharacter implements ISuperhero, IMereMortal {
    constructor() {
        console.log("DCCharacter instantiated");
    }

    fight(): void {
        console.log("Pummeling villains!")
    }

    work() : void {
        console.log("Building houses!")
    }
}
