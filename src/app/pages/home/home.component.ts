import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
users:any=[];
pokemons = [];
datos:any=[];

constructor(private traerdatos:UsersService){}

ngOnInit(): void {
  this.traerdatos.getenviar().subscribe(
     res=>{
     console.log(res)
      this.datos=res
    },res=>{

     }
   )
  this.getlista()
  }

  getlista(){

    let listaData;
    
    for(let i = 61 ; i < 101; i++){
     
      this.traerdatos.getlista(String(i)).subscribe(
        res => {
          listaData = {
            position: i,
            id:res.id,
            title:res.title,
            body:res.body
          }
          this.users.push(listaData)
         
        },
        err => {
        console.log('hola')
        }
      )

    }
    console.log(this.users);
  }
  

  
   
}
