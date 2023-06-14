import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Director } from 'src/app/model/director.model';
import { DotationUcaRech } from 'src/app/model/dotationUcaRech.model';
import { Etablissement } from 'src/app/model/etablissement.model';
import { Laboratoire } from 'src/app/model/laboratoire.model';
import { Membre } from 'src/app/model/membre.model';
import { Projet } from 'src/app/model/projet.model';
import { RespoAffairesFinancier } from 'src/app/model/respoAffairesFinancier .model';
import { RespoMarche } from 'src/app/model/respoMarche.model';
import { DirectorService } from 'src/app/service/director.service';
import { DotationUcaRechService } from 'src/app/service/dotation-uca-rech.service';
import { EtablissementService } from 'src/app/service/etablissement.service';
import { LaboratoireService } from 'src/app/service/laboratoire.service';
import { MembreService } from 'src/app/service/membre.service';
import { ProjetService } from 'src/app/service/projet.service';
import { RespoAffairesFinancierService } from 'src/app/service/respo-affaires-financier.service';
import { RespoMarcheService } from 'src/app/service/responsable-marche.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public etablissements: Etablissement[] = [];
  public membres: Membre[] = [];
  public laboratoires: Laboratoire[] = [];
  public Projets: Projet[] = [];

  public directors: Director[] = [];
  public ucaRechs: DotationUcaRech[] = [];
  public respoAffairesFinancier:RespoAffairesFinancier[]=[];
  public respoMarche:RespoMarche[]=[];

  constructor(
    private laboratoireService: LaboratoireService,
    private membreService: MembreService,
    private etablissemntService:EtablissementService,
    private projetService:ProjetService,

    private directorService:DirectorService,
    private respoMarcheService:RespoMarcheService,
    private respoAffairesFinancierService:RespoAffairesFinancierService,
    private dotationUcaRechService:DotationUcaRechService,

  ) { }

  ngOnInit(): void {
    this.getLaboratoires();
    this.getMembres();
    this.getEtablissement();
    this.getProjets();

    this.getDirectors();
    this.getDotationUcaRechs();
    this.getRespoAffairesFinances();
    this.getRespoMarche();
  }

  private getLaboratoires(): void {
    this.laboratoireService.getAllLaboratoires().subscribe(
      (laboratoires: Laboratoire[]) => {
        console.log(laboratoires);
        this.laboratoires = laboratoires;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  private getMembres(): void {
    this.membreService.getAllMembres().subscribe(
      (membres: Membre[]) => {
        this.membres = membres;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }


  private getEtablissement(): void {
    this.etablissemntService.getAllEtablissements().subscribe(
      (etablissements: Etablissement[]) => {
        this.etablissements = etablissements;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }



  private getProjets(): void {
    this.projetService.getAllProjets().subscribe(
      (Projets: Projet[]) => {
        this.Projets = Projets;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  private getDirectors(): void {
    this.directorService.getAllDirectors().subscribe(
      (directors: Director[]) => {
        this.directors = directors;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }


  private getRespoMarche(): void {
    this.respoMarcheService.getAllRespoMarche().subscribe(
      (respoMarche: RespoMarche[]) => {
        this.respoMarche = respoMarche;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  private getRespoAffairesFinances(): void {
    this.respoAffairesFinancierService.getAllRespoAffairesFinancier().subscribe(
      (respoAffairesFinancier: RespoAffairesFinancier[]) => {
        this.respoAffairesFinancier = respoAffairesFinancier;
      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error : ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

  private getDotationUcaRechs(): void {
    this.dotationUcaRechService.getAllDotationUcaRech().subscribe(
      (dotationUcaRechs: DotationUcaRech[]) => {
      this.ucaRechs=dotationUcaRechs;

      },
      (error: HttpErrorResponse) => {
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
      }
    );
  }

}
