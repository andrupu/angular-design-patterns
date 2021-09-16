import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-in-an-app-bar',
  templateUrl: './in-an-app-bar.component.html',
  styleUrls: ['./in-an-app-bar.component.scss']
})
export class InAnAppBarComponent implements OnInit {
  isSmall: boolean;
  avatarImage= "./assets/avatar_40.png";
  open1 = false;
  open2 = false;
  open3 = false;
  open4 = false;
  open5 = false;
  items1 = [
      {
          title: 'Log In',
          icon: 'lock_open',
      },
      {
          title: 'Register',
          icon: 'apps',
      },
      {
          title: 'About',
          icon: 'info',
      },
  ];
  items2 = [
    {
        title: 'Change Password',
        icon: 'vpn_key',
    },
    {
        title: 'Preferences',
        icon: 'settings',
    },
    {
        title: 'Log Out',
        icon: 'exit_to_app',
    },
];
  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this._breakpointObserver
        .observe([Breakpoints.Small, Breakpoints.Handset])
        .subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.isSmall = true;
            } else {
                this.isSmall = false;
            }
        });
}
toggleMenu(): void {
  const drawerOpen = this._drawerService.getDrawerOpen();
  this._drawerService.setDrawerOpen(!drawerOpen);
}

}
