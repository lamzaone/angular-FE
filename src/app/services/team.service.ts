import { Injectable } from '@angular/core';

export class Team {
  id_leader: number;
  id_team: number;
  team_name: string;

  constructor(id_leader: number, id_team: number, team_name: string) {
    this.id_leader = id_leader;
    this.id_team = id_team;
    this.team_name = team_name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    new Team(3, 1, 'Team Alpha'),
    new Team(4, 2, 'Team Beta'),
    new Team(8, 3, 'Team C'),
    new Team(8, 4, 'Team D'),
  ];

  constructor() { }


  getTeams(): Team[] {
    return this.teams;
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }
  
  getTeamById(teamId: number): Team | undefined {
    return this.teams.find(team => team.id_team === teamId);
  }

  isCurrentUserLeaderOfTeam(teamId: number | null | undefined, currentUserId: number | null | undefined): boolean {
    const team = this.teams.find(t => t.id_team === teamId);
    return team ? team.id_leader === currentUserId : false;
  }
}