import { Dotation_Project } from './dotationProject.model';

export class Projet {
  id!: number;
  title!: string;
  description!: string;
  field!: string;
  startDate!: Date;
  endDate!: Date;
  dotationProjects: Dotation_Project[] = [];
}
