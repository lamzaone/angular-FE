import { Injectable } from '@angular/core';


export class User{
  id: number;
  name: string;
  email: string;
  role: string;

  constructor(id:number, name:string, email:string, role:string){
    this.id =  id;
    this.name = name;
    this.email = email;
    this.role = role;
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

  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Mentor',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Student',
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Student',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Student',
    },
  ];
    
  constructor() { }
}
