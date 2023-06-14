import { Membre } from './membre.model';
import { Responsable } from './responsable.model';
import { TypeBesoin } from './typeBesoin.model';

export class ExpressionBesoin {

  id!: number;
  description!: string;
  montant_approximatif!:number;
  montant_effectif!: number;
  demandeDate!: Date;
  validatDate!: Date;
  isValid!: boolean ;
  membre!: Membre ;
  responsable!: Responsable;
  typeBesoin: TypeBesoin =new TypeBesoin;
}

