import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionDataModel } from 'src/app/models/session-data.model';
import { SecurityService } from 'src/app/service/shared/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeSession: boolean = false;
subscription:Subscription=new Subscription();
  constructor(private secutityService: SecurityService) {

   }

  ngOnInit(): void {
    this.subscription=this.secutityService.GetSessionInfo().subscribe({
      next:(data: SessionDataModel)=>{
          this.activeSession=data.isLoggedIn;
        
      },
      error: (err:any)=>{
      
      }
      });  }


  

}
