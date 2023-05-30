import { Dotation_Membre } from './dotationMembre.model';

export class DotationUcaRech {
  id!: number;
  anneAffectation!: number;
  dotation_Membres: Dotation_Membre[] = [];
}
