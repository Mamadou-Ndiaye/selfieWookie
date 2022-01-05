import { Wookie } from "./wookie";
export class Selfie {
   image : string;
   wookie : Wookie;

   constructor( image : string, wookie : Wookie)
   {
       this.image = image;
       this.wookie = wookie;
   }
}
