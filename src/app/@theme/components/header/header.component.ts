import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserService } from '../../../common/services/user.service';
import { AuthenticationService } from '../../../common/services/autentication.service';
import { Router } from '@angular/router';
import { DoorService } from '../../../common/services/door.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  doorStatus = {
    inOpen: false,
    outOpen: false,
  };
  constructor(
    public authService: AuthenticationService,
    private sidebarService: NbSidebarService,
              private router: Router,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
    private doorService: DoorService,
  ) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

    this.menuService
      .onItemClick()
      .pipe(
        map(({ item }) => item),
        takeUntil(this.destroy$),
      )
      .subscribe((item: any) => {
        switch (item) {}
        switch (item.title) {
          case 'Log out': {
            this.router.navigate(['/auth/logout']);
            this.authService.logout();
          }
        }
      });
  }

  changeDoorStatus(type: string, status: boolean) {
    switch (type) {
      case 'IN':
        this.doorService.controlInDoor(status ? 'O' : 'C').subscribe();
        this.doorStatus.inOpen = !this.doorStatus.inOpen;
        break;
      case 'OUT':
        this.doorService.controlOutDoor(status ? 'O' : 'C').subscribe();
        this.doorStatus.outOpen = !this.doorStatus.outOpen;
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
