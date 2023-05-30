import { Laboratoire } from './laboratoire.model';
import { ExpressionBesoin } from './expressionBesoin.model';
import { Dotation_Project } from './dotationProject.model';
import { Dotation_Membre } from './dotationMembre.model';

export class Membre {
  id!: number;
  name!: string;
  designation!: string;
  email!: string;
  phoneNumber!: string;
  department!: string;
  researchArea!: string;
  qualification!: string;
  laboratoire: Laboratoire = new Laboratoire;
  expressionBesoins: ExpressionBesoin[] = [];
  dotationProjects: Dotation_Project[] = [];
  dotation_Membres: Dotation_Membre[] = [];
}
