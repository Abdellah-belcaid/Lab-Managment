import { DotationUcaRech } from './dotationUcaRech.model';
import { Membre } from './membre.model';

export class Dotation_Membre {
  id!: DotationMembreId;
  montant!: number;
  anneAffecter!: number;
  ucaRech!: DotationUcaRech ;
  membre!: Membre;
}

export class DotationMembreId {
  ucaRechId!: number;
  membreId!: number;
}
