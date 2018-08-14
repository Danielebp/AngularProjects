import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {DataStorageService} from '../shared/data-storage.service';
import { Response } from '@angular/http';
import {TeamsService} from '../Teams/teams.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  genders = ['Masculino', 'Femenino', 'Otro'];
  registrationForm: FormGroup;

  constructor(private dataStorageService: DataStorageService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    // this.dataStorageService.getSelectedTeams().subscribe(
    //   (response: Response) => {
    //     this.teamsService.loadSelectedTeams(response.json());
    //   });
    this.initForm();
  }

  private initForm() {

    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'accessCode': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'coach': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'curp': new FormControl(null, Validators.required),
        'email': new FormControl(),
        'phone': new FormControl(null, Validators.required),
        'birthdate': new FormControl(null, Validators.required)
      }),
      'players': new FormArray([])
    });
  }

  onAddPlayer() {
    (<FormArray>this.registrationForm.get('players')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'gender': new FormControl(null, Validators.required),
        'position': new FormControl(null, Validators.required),
        'birthdate': new FormControl(null, Validators.required)
      })
    );
  }

  onDeletePlayer(index: number) {
    (<FormArray>this.registrationForm.get('players')).removeAt(index);
  }

  onRegister() {
    if (this.registrationForm.status !== 'VALID') {
      console.log(this.registrationForm);
      alert('Please check all the fields');
      return;
    }

    const isValid = this.teamsService.checkTeam(this.registrationForm.get('name').value, this.registrationForm.get('accessCode').value);

    if (isValid) {
      this.teamsService.addTeam(this.registrationForm.value);
      this.dataStorageService.storeTeams().subscribe(
        (response: Response) => {
          console.log(response.statusText);
        }
      );
    } else {
      alert('Could not register');
    }
  }
}
