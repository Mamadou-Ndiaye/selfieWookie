import { Selfie } from "./selfie";

export class Wookie {

   nom : string;
   selfie : Selfie [];
   
   constructor(nom  : string , selfie  : Selfie[] )
   {
    this.nom = nom;
    this.selfie = selfie;
   }
}
