import { Container, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun } from "./implementations";

export let container = new Container();

container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);

// Bind lethal and nonlethal weapon implementations using tags
container.bind<IWeapon>(TYPES.IWeapon).to(Hammer).whenTargetTagged("lethal", true);
container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun).whenTargetTagged("lethal", false);

// Bind a weapon factory that randomly produces either a lethal or non-lethal weapon
function weaponFactory(context: interfaces.Context) {
    return () => {
        let useLethalForce = Math.random() < 0.5;
        return context.container.getTagged<IWeapon>(TYPES.IWeapon, "lethal", useLethalForce);
    }
}
container.bind<interfaces.Factory<IWeapon>>(TYPES.IWeaponFactory).toFactory(weaponFactory);
