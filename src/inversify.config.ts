import { Container, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Bind lethal and nonlethal weapon implementations using tags
container.bind<IWeapon>(TYPES.IWeapon).to(Hammer).whenTargetTagged("lethal", true);
container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun).whenTargetTagged("lethal", false);

// Bind a "dynamic value" that randomly produces either a lethal or non-lethal weapon.
// This is effectively a factory as in the last example, but there's a key difference.
// The injection point doesn't expicitly deal wth a factory. The container does, but
// the thing being injected to has no clue that we supplied a factory.
function weaponFactory(context: interfaces.Context) {
    let useLethalForce = Math.random() < 0.5;
    return context.container.getTagged<IWeapon>(TYPES.IWeapon, "lethal", useLethalForce);
}
container.bind<IWeapon>(TYPES.IWeapon).toDynamicValue(weaponFactory).whenTargetIsDefault();
