import { Component, Input, type OnInit } from '@angular/core'; // Importation des décorateurs, types et interfaces nécessaires pour créer un composant Angular.
import type { FaceSnap } from '../models/face-snap'; // Importation du modèle FaceSnap pour typer les données.
import {
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-face-snap', // Définit le sélecteur HTML utilisé pour insérer ce composant dans une page.
  standalone: true, // Permet de définir ce composant comme un composant autonome (pas besoin d'être déclaré dans un module Angular).
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe], // Liste des imports nécessaires à ce composant (actuellement vide).
  templateUrl: './face-snap.component.html', // Chemin vers le fichier de template HTML associé.
  styleUrl: './face-snap.component.scss', // Chemin vers le fichier de styles SCSS associé.
})
export class FaceSnapComponent implements OnInit {
  // Déclaration d'une propriété en entrée pour recevoir des données depuis un composant parent.
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string; // Texte affiché sur le bouton de "Snap".
  userHasSnapped!: boolean; // État indiquant si l'utilisateur a déjà "snappé" (true) ou non (false).

  ngOnInit(): void {
    // Initialisation des propriétés lors du cycle de vie du composant.
    this.snapButtonText = 'Oh snap!'; // Texte initial du bouton.
    this.userHasSnapped = false; // Par défaut, l'utilisateur n'a pas encore "snappé".
  }

  onSnap(): void {
    // Méthode appelée lorsqu'on clique sur le bouton de "Snap".
    if (this.userHasSnapped) {
      // Si l'utilisateur a déjà "snappé", on annule le snap.
      this.unSnap();
    } else {
      // Sinon, on ajoute un snap.
      this.snap();
    }
  }

  unSnap() {
    // Méthode pour annuler un snap.
    this.faceSnap.removeSnap(); // Appelle une méthode du modèle pour décrémenter le nombre de snaps.
    this.snapButtonText = 'Oh snap!'; // Met à jour le texte du bouton.
    this.userHasSnapped = false; // Met à jour l'état pour indiquer que l'utilisateur n'a pas "snappé".
  }

  snap() {
    // Méthode pour ajouter un snap.
    this.faceSnap.addSnap(); // Appelle une méthode du modèle pour incrémenter le nombre de snaps.
    this.snapButtonText = 'Oops Unsnap'; // Met à jour le texte du bouton.
    this.userHasSnapped = true; // Met à jour l'état pour indiquer que l'utilisateur a "snappé".
  }
}
