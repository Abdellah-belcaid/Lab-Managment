import { Dotation_Project } from './dotationProject.model';

export class Projet {
  id!: number;
  title!: string;
  field!: string;
  description!: string;
  startDate!: Date;
  endDate!: Date;

  dotationProjects: Dotation_Project[] = [];
}
