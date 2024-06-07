import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Volunteer } from '../../volunteer/volunteer';
import { VolunteerService } from 'src/app/volunteer/volunteer.service';
import { Shelter } from '../shelter';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-volunteer-kick',
  templateUrl: './volunteer-kick.component.html',
  standalone: true,
  imports: [NgIf]
})
export class VolunteerKickComponent implements OnInit{
  public shelter: Shelter = new Shelter();
  public volunteer: Volunteer = new Volunteer();
  private volunteer_id: string;
  private shelter_id : string
  
  constructor(
    private route: ActivatedRoute,
    private volunteerService: VolunteerService,
    private router: Router,
) {
}

  kick(): void{
    console.log("helo")
   
    this.volunteerService.deleteResource(this.volunteer).subscribe(
      () => {
        console.log("bye")
        this.router.navigate([ "shelters",this.shelter_id,'edit']);
      });

  }

  cancel(): void{
    this.router.navigate([ "shelters",this.shelter_id,'edit']);
  }
  ngOnInit(): void {
    console.log("leng="+this.volunteer.username.length)
    this.volunteer_id = this.route.snapshot.paramMap.get('volunteer_id');
    this.shelter_id = this.route.snapshot.paramMap.get('id');
    this.volunteerService.getResource(this.volunteer_id).subscribe(
      volunteer => {
        this.volunteer = volunteer
        console.log("AST "+volunteer.username)
       // this.volunteer.getRelation<Shelter>("userShelter").subscribe(
       //   shelter => this.shelter = shelter
       // )
      });
    
      
  }
  


}
