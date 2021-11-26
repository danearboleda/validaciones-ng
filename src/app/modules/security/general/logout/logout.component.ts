import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDataModel } from 'src/app/models/session-data.model';
import { LocalStorageService } from 'src/app/service/shared/local-storage.service';
import { SecurityService } from 'src/app/service/shared/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
    private securityService:SecurityService,
    private router:Router) { }

  ngOnInit(): void {
    this.localStorageService.RemoveSessionData();

    this.securityService.RefreshSessionInfo(new SessionDataModel());
this.router.navigate(["/home"])
  
  }

}
