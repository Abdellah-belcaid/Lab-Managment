import { Dotation_Membre } from './dotationMembre.model';

export class DotationUcaRech {
  id!: number;
  title!:string;
  description!:string;
  anneAffectation!: number;
  dotation_Membres: Dotation_Membre[] = [];
}
