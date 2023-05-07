import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { delay, filter, take } from 'rxjs';

import { NavBarModel } from './shared/nav-bar.model';
import { RolesMap } from './shared/nav-bar.enum';
import { AuthService } from 'src/app/authentication/services/auth.service';



@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  items?: NavBarModel[];
  userRole: string[];
  menu: any[];

  showMenu: boolean = true;



  rolesMap = RolesMap;
  selectedButtonIndex = 0;

  @Output() scroll = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private observer: BreakpointObserver,
    private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
  ) {
    this.userRole = localStorage.getItem('authorities')?.split(',')!;
    this.menu = this.rolesMap(this.userRole);
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.router.url.split('/')[2] === 'user-authentication' ? this.showMenu = false : this.showMenu = true;
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.showMenu = true;
          if (this.router.url.split('/')[2] === 'user-authentication') {
            this.sidenav.mode = 'over';
            this.sidenav.close();
            this.showMenu = false;
          }
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.router.url.split('/')[2] === 'user-authentication') {
          this.sidenav.close();
          this.showMenu = false;
        } else {
          this.sidenav.open();
          this.showMenu = true;
        }

        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });


    this.cd.detectChanges();
  }

  ngOnInit(): void {

    this.items = [
      {
        no: 1, title: 'پیشخوان', path: '/panel/dashboard', icon: 'dashboard_customize', role: ['User'], children: []
      },
      {
        no: 2, title: 'محصولات', path: '/panel/user-authentication', icon: 'list', role: ['User'], children: []
      },
      {
        no: 3, title: 'دسته بندی', path: '/panel', icon: 'category', role: ['User'], children: []
      },
      {
        no: 4, title: 'سفارشات', path: '/panel', icon: 'production_quantity_limits', role: ['User'], children: []
      },
      {
        no: 5, title: 'روش و هزینه ارسال', path: '/panel', icon: 'schedule_send', role: ['User'], children: []
      },
      {
        no: 6, title: 'تیکت', path: '/panel', icon: 'mark_email_read', role: ['User'], children: []
      },
      {
        no: 7, title: 'نظرات', path: '/panel', icon: 'chat', role: ['User'], children: []
      },
      {
        no: 8, title: 'اتصال به دامنه اختصاصی', path: '/panel', icon: 'settings_input_composite', role: ['User'], children: []
      },
      {
        no: 9, title: 'ورود به وبلاگ اختصاصی', path: '/panel', icon: 'login', role: ['User'], children: []
      },
      {
        no: 10, title: 'سئو سایت', path: '/panel', icon: 'energy_savings_leaf', role: ['User'], children: []
      },
    ];
  }

  accessLevel() {
    let a = this.items?.filter(x => {
      return this.menu.some(y => {
        return y.no === x.no;
      })
    });

    //  برای فیلتر کردن سطح دسترسی رول های منو
    a = a!.filter(f => {
      return f.role.find(n => this.userRole.find(u => n === u))
    });

    a.filter(c => {
      c.children = c?.children?.filter(m => {
        return m.role?.find(x => this.userRole.find(u => x === u))
      })
    })

    a.filter(c => {
      c?.children?.filter(m => {
        m.grandchild = m?.grandchild?.filter(b => {
          return b.role?.find(x => this.userRole.find(u => x === u))
        })
      })
    })

    //  برای فیلتر کردن سطح دسترسی رول های منو

    this.items = a;
    this.findRootURL();
  }

  findRootURL() {
    this.items?.find((i) => {
      if (this.router.url.search('panel') != -1) {
        i.path === this.router.url ? i.selected = !i.selected : '';
      } else {
        const a = i.path.split('/');
        const b = this.router.url.split('/');
        if (a[3]) {
          this.findChildForRootURL(i);
          return;
        }
        a[2] === b[1] ? i.selected = !i.selected : '';
      }
    });
  }

  findChildForRootURL(item: NavBarModel) {
    const a = item.path.split('/');
    const b = this.router.url.split('/');
    a[2] === b[1] && a[3] === b[3] ? item.selected = !item.selected : '';
  }

  onButtonClick(index: number): void {
    this.selectedButtonIndex = index;
    const lastItem = this.items!.length - 1;
    if (index > lastItem - 3) {
      this.scroll.next();
    }
  }


  logOut() {
    this.authService.logOut();
    this.router.navigate(['auth']);
  }
}

