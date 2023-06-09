import { Membre } from './membre.model';
import { Responsable } from './responsable.model';
import { TypeBesoin } from './typeBesoin.model';

export class ExpressionBesoin {
  id!: number;
  description!: string;
  montant!: number;
  demandeDate!: Date;
  validatDate!: Date;
  isValid: boolean = false;
  membre: Membre = new Membre;
  responsable: Responsable = new Responsable;
  typeBesoins: TypeBesoin[] = [];
}

