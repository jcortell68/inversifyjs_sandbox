export interface ISuperhero {
    origin(): void;
    fight(): void;
    speak(): void;
}

export interface IWeapon {
    useit(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IWeaponFactory: Symbol("IWeaponFactory"),
    IWeapon: Symbol("IWeapon"),
}
