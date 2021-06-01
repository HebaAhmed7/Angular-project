import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

  }
  
   users:User[]=[
     {name :'ahmed',age:27,gender:'male'},
     {name :'ahmed',age:27,gender:'male'},
     {name :'ahmed',age:27,gender:'male'},
     {name :'ahmed',age:27,gender:'male'}
   ]
}
