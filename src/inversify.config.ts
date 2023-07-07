import { Container, injectable, interfaces } from "inversify";
import { TYPES, ISuperhero, IWeapon } from "./types";
import { Hammer, MarvelCharacter, NerfGun, Sword } from "./implementations";

let parent_container = new Container();

let child_container = new Container();
child_container.parent = parent_container;

parent_container.bind<ISuperhero>(TYPES.ISuperhero).to(MarvelCharacter);
parent_container.bind<IWeapon>(TYPES.IWeapon).to(Hammer);

// We effectively override the binding via the child container. Comment
// out this line and you'll see the superhero use a hammer instead of
// a nerf gun.
child_container.bind<IWeapon>(TYPES.IWeapon).to(NerfGun);

export { child_container as container };