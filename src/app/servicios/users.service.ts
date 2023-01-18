import { HttpClient } from '@angular/common/http';
import { Injectable ,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService  implements OnInit{
  
  urlbase="https://jsonplaceholder.typicode.com/posts"
  
  constructor(private https:HttpClient) { }
  
  ngOnInit(): void {
    console.log('lista')  
  }
  getenviar(){
    return this.https.get<any>(this.urlbase)
  }
  
  getlista(index: string){
    return this.https.get<any>(`${this.urlbase}/${index}`);
  }


}

