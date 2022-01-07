import { Wookie } from "./wookie";
export class Selfie {

   titre : string; 
   image : string;
   wookie : Wookie;

   constructor( image : string, wookie : Wookie, titre :string)
   {
       this.image = image;
       this.wookie = wookie;
       this.titre = titre;
   }
}
