import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
// import { ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
    selector: 'app-app-bar-account-menu',
    templateUrl: './app-bar-account-menu.component.html',
    styleUrls: ['./app-bar-account-menu.component.scss'],
})
export class AppBarAccountMenuComponent implements OnInit {
    isSmall: boolean;
    open: boolean;
    // items: items;

    avatarImage="./assets/AccountPhoto";
    menuTitle="Chima Thabani";
    menuSubtitle="CThabani@example.com";

    // let open = false;
    // const items = [
    //     {
    //         title: 'Change Password',
    //         icon: 'vpn_key',
    //     },
    //     {
    //         title: 'Preferences',
    //         icon: 'settings',
    //     },
    //     {
    //         title: 'Log Out',
    //         icon: 'logout',
    //     },
    // ];

    // originX: select('positions.originX', ['start', 'center', 'end'], 'start');
    // originY: select('positions.originY', ['top', 'center', 'bottom'], 'top');
    // overlayX: select('positions.overlayX', ['start', 'center', 'end'], 'start');
    // overlayY: select('positions.overlayY', ['top', 'center', 'bottom'], 'top');
    // invertRTL: invertRTL,
    // createPositions: (originX, originY, overlayX, overlayY): ConnectionPositionPair[] => [
    //         new ConnectionPositionPair({ originX, originY }, { overlayX, overlayY }),
    //     ],

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

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
