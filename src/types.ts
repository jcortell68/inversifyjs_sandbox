export interface ISuperhero {
    fight(): void;
}

export interface IMereMortal {
    work(): void;
}

export let TYPES = {
    ISuperhero: Symbol("ISuperhero"),
    IMereMortal: Symbol("IMereMortal"),
}
