import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {TeamsService} from '../teams.service';
import {Team} from '../team.model';
import {Subscription} from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Team[];
  subscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private teamsService: TeamsService) { }

  ngOnInit() {
    // this.loadTeamsFromServer();

    this.subscription = this.teamsService.teamsChanged
      .subscribe(
        (teams: Team[]) => {
          this.teams = teams;
        }
      );
    this.teams = this.teamsService.getTeams();
  }

  // loadTeamsFromServer() {
  //   this.dataStorageService.loadTeams().subscribe(
  //     (response: Team[]) => {
  //       this.teamsService.setTeams(response);
  //     }
  //   );
  // }
}
