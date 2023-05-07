import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PanelService } from './shared/services/panel.service';
import { UserProfile } from './shared/models/panel.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  userProfile = new UserProfile();

  constructor(
    private panelService: PanelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.panelService.getUserProfile().subscribe({
      next : (UserProfile)=> {
        !UserProfile.personInfo || UserProfile.personInfo?.verified === false ? this.router.navigate([`./panel/user-authentication`]) : this.router.navigate([`./panel/dashboard`])
      },error(err) {
        console.log('error: ',err);
      },complete() {
        
      },
    });
  }

}
