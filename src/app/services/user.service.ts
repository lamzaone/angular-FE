import { Injectable } from '@angular/core';
import { Team } from './team.service';


export class User{
  id: number;
  name: string;
  email: string;
  role: string;
  id_team: number | null;

  constructor(id:number, name:string, email:string, role:string, id_team?:number){
    this.id =  id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.id_team = id_team ? id_team : null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;
  

  setCurrentUser(user: User) {
    this.currentUser = user;
    console.log(this.currentUser);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserByEmail(email: string): User | null {
    const user = this.users.find((user) => user.email === email);
    return user ? user : null;
  }
  
  getUsersByTeamId(teamId: number): User[] {
    return this.users.filter(user => user.id_team === teamId);
  }


  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Mentor',
      id_team: null,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Student',
      id_team: 1,
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'janed@example.com',
      role: 'Student',
      id_team: 1,
    },
    {
      id: 4,
      name: 'Janee Smith',
      email: 'janee@example.com',
      role: 'Student',
      id_team: 2,
    },    {
      id: 5,
      name: 'Janed Smith',
      email: 'janeda@example.com',
      role: 'Student',
      id_team: 2,
    },
    {
      id: 6,
      name: 'Janette Smith',
      email: 'jane@example.com',
      role: 'Student',
      id_team: 2,
    },
    {
      id: 7,
      name: 'MJane Smith',
      email: 'jane@example.com',
      role: 'Student',
      id_team: 2,
    },
    {
      id: 8,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Student',
      id_team: null,
    },
    {
      id: 9,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Student',
      id_team: null,
    },
  ];
    
  constructor() { }
}
