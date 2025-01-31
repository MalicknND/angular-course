import { Component, Input } from '@angular/core'; // Importation des décorateurs, types et interfaces nécessaires pour créer un composant Angular.
import { FaceSnap } from '../models/face-snap'; // Importation du modèle FaceSnap pour typer les données.
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap', // Définit le sélecteur HTML utilisé pour insérer ce composant dans une page.
  standalone: true, // Permet de définir ce composant comme un composant autonome (pas besoin d'être déclaré dans un module Angular).
  imports: [UpperCasePipe], // Liste des imports nécessaires à ce composant (actuellement vide).
  templateUrl: './face-snap.component.html', // Chemin vers le fichier de template HTML associé.
  styleUrl: './face-snap.component.scss', // Chemin vers le fichier de styles SCSS associé.
})
export class FaceSnapComponent {
  // Déclaration d'une propriété en entrée pour recevoir des données depuis un composant parent.
  @Input() faceSnap!: FaceSnap;

  constructor(private route: Router) {} // Constructeur du composant.

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
