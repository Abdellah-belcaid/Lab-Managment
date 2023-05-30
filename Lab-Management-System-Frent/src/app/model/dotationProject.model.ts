import { Projet } from './projet.model';
import { Membre } from './membre.model';

export class Dotation_Project {
  id!: DotationProjectId;
  status!: string;
  source!: string;
  purpose!: string;
  endowmentAmount!: number;
  projet!: Projet;
  membre!: Membre;
}

export class DotationProjectId {
  projetId!: number;
  membreId!: number;
}
