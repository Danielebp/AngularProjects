import {SelectedTeam, Team} from './team.model';
import {Subject} from '../../../node_modules/rxjs';

export class TeamsService {

  teamsChanged = new Subject<Team[]>();
  selectedTeamsChanged = new Subject<SelectedTeam[]>();
  private teams: Team[] = [];
  private  selectedTeams: SelectedTeam[] = [new SelectedTeam('', '')];

  isTeamDefined (name: string) {
    for (const t of this.teams) {
      if (t.name === name) {
        return true;
      }
    }
    return false;
  }

  getTeams () {
    return this.teams.slice();
  }

  addTeam (team: Team) {
    this.teams.push(team);
    this.teamsChanged.next (this.teams.slice());
  }

  setTeams (teams: Team[]) {
    this.teams = teams;
    this.teamsChanged.next(this.teams.slice());
  }

  loadSelectedTeams(selectedTeams: any) {
    this.selectedTeams = selectedTeams;
    this.selectedTeamsChanged.next(this.selectedTeams.slice());
  }

  getSelectedTeams() {
    return this.selectedTeams.slice();
  }
  checkTeam(team: string, code: string) {
    for (const t of this.selectedTeams) {
      if (t.name === team && t.accessCode === code) {
        return true;
      }
    }
    return false;
  }
}
