export interface ISuperhero {
    origin(): void;
    fight(toKill: boolean): void;
}

export interface IWeapon {
    useit(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IWeapon: Symbol("IWeapon"),
}
