import "reflect-metadata";
import { injectable } from "inversify";
import { ISuperhero } from "./types";

@injectable()
export class MarvelCharacter implements ISuperhero {
    constructor() {
        console.log("MarvelCharacter instantiated");
    }
    origin(): void {
        console.log("I hail from Stan Lee");
    }
}

@injectable()
export class DcCharacter implements ISuperhero {
    constructor() {
        console.log("DcCharacter instantiated");
    }
    origin(): void {
        console.log("I hail from a publishing corporation");
    }
}