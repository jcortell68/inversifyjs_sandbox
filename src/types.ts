export interface ISuperhero {
    origin(): void;
    fight(): void;
}

export interface IWeapon {
    useit(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IWeapon: Symbol("IWeapon"),
}
