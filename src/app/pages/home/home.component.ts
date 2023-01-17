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
constructor(private traerdatos:UsersService){}

ngOnInit(): void {
  this.traerdatos.getenviar().subscribe(
    res=>{
      console.log(res)
      this.users=res
    },res=>{

    }
  )
  }

  
  
   
}
