import { Component, type OnInit } from '@angular/core'; // Importation des décorateurs, types et interfaces nécessaires pour créer un composant Angular.
import { FaceSnap } from '../models/face-snap'; // Importation du modèle FaceSnap pour typer les données.
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap', // Définit le sélecteur HTML utilisé pour insérer ce composant dans une page.
  standalone: true, // Permet de définir ce composant comme un composant autonome (pas besoin d'être déclaré dans un module Angular).
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink], // Liste des imports nécessaires à ce composant (actuellement vide).
  templateUrl: './single-face-snap.component.html', // Chemin vers le fichier de template HTML associé.
  styleUrl: './single-face-snap.component.scss', // Chemin vers le fichier de styles SCSS associé.
})
export class SingleFaceSnapComponent implements OnInit {
  // Déclaration d'une propriété en entrée pour recevoir des données depuis un composant parent.
  faceSnap!: FaceSnap;
  snapButtonText!: string; // Texte affiché sur le bouton de "Snap".
  userHasSnapped!: boolean; // État indiquant si l'utilisateur a déjà "snappé" (true) ou non (false).

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {} // Constructeur du composant.

  ngOnInit(): void {
    this.prepareInterface();

    // Récupération de l'id de la photo depuis l'URL.
    this.getFaceSnap();
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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap'); // Appelle un service pour décrémenter le nombre de snaps.
    this.snapButtonText = 'Oh snap!'; // Met à jour le texte du bouton.
    this.userHasSnapped = false; // Met à jour l'état pour indiquer que l'utilisateur n'a pas "snappé".
  }

  snap() {
    // Méthode pour ajouter un snap.
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); // Appelle un service pour incrémenter le nombre de snaps.
    this.snapButtonText = 'Oops Unsnap'; // Met à jour le texte du bouton.
    this.userHasSnapped = true; // Met à jour l'état pour indiquer que l'utilisateur a "snappé".
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh snap!'; // Texte initial du bouton.
    this.userHasSnapped = false; // Par défaut, l'utilisateur n'a pas encore "snappé".
  }
}
