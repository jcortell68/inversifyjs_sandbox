export interface ISuperhero {
    origin(): void;
    fight(): void;
}

export interface IWeapon {
    useit(): void;
}

export interface IToy {
    useit(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IWeapon: Symbol("IWeapon"),
    IToy: Symbol("IToy"),
}
