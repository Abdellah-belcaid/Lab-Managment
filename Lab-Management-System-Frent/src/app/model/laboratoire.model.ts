import { Membre } from './membre.model';
import { Etablissement } from './etablissement.model';
import { Director } from './director.model';

export class Laboratoire {
  id!: number;
  nom!: string;
  email!: string;
  adresse!: string;
  telephone!: string;
  responsable!: string;
  domaine!: string;
  description!: string;
  derictor!: Director;
  etablissement!: Etablissement;
  membres!: Membre[];
}
