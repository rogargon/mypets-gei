import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../pets.service';
import { PetData } from '../pet-data';
@Component({
  selector: 'app-pets-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  petsService: PetsService = inject(PetsService);
  petData: PetData | undefined;

  constructor() {
    const petId = Number(this.route.snapshot.paramMap.get('id'));
    this.petData= this.petsService.getPet(petId);
  }
}