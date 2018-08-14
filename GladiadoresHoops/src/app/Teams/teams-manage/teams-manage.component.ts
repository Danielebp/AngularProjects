import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {TeamsService} from '../teams.service';

@Component({
  selector: 'app-teams-manage',
  templateUrl: './teams-manage.component.html',
  styleUrls: ['./teams-manage.component.css']
})
export class TeamsManageComponent implements OnInit {

  myAccessForm: FormGroup ;

  constructor(private dataStorageService: DataStorageService,
              private teamService: TeamsService) { }

  ngOnInit() {
    this.initForm();
    this.dataStorageService.getSelectedTeams().subscribe(
      (response: Response) => {
        this.teamService.loadSelectedTeams(response.json());
        this.initForm();
      }
    );
  }

  private initForm() {

    const selTeams = new FormArray([]);

    for (const t of this.teamService.getSelectedTeams()) {
      const status = this.teamService.isTeamDefined(t.name) ? 'registrado' : 'pendiente';

      selTeams.push(
        new FormGroup ({
          'name': new FormControl(t.name, Validators.required),
          'accessCode': new FormControl(t.accessCode, Validators.required),
          'status': new FormControl(status, Validators.required)
        })
      );
    }

    this.myAccessForm = new FormGroup({
      'selectedTeams': selTeams
    });
  }

  onSubmit () {
    this.dataStorageService.updateSelectedTeams(this.myAccessForm.get('selectedTeams').value).subscribe(
      (response: Response) => {
        console.log(response.statusText);
      }
    );
  }

  onRevokeAccess(index: number) {
    (<FormArray>this.myAccessForm.get('selectedTeams')).removeAt(index);
  }

  onGrantAccess() {
    (<FormArray>this.myAccessForm.get('selectedTeams')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'accessCode': new FormControl(null, Validators.required),
        'status': new FormControl('pendiente', Validators.required)
      })
    );
  }
}


