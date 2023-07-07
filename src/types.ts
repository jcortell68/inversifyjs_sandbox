export interface ISuperhero {
    origin(): void;
    fight(): void;
    play(): void;
}

export interface IWeapon {
    useit(): void;
}

export interface IToy {
    play(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IWeapon: Symbol("IWeapon"),
    IToy: Symbol("IToy"),
}
