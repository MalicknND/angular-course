import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private router: Router) {
    // Navigation to the facesnaps page when the "Continue" button is clicked.
  }
  onContinue(): void {
    console.log('Continue to the next page');
    this.router.navigateByUrl('facesnaps');
  }
}
