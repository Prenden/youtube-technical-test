import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MENU_ELEMENTS } from './consts';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserComponent } from './components/user/user.component';
import { LoggedInAreaComponent } from './components/logged-in-area/logged-in-area.component';

@Component({
  selector: 'app-responsive-sidenav',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    SearchBarComponent,
    UserComponent,
    LoggedInAreaComponent,
  ],
  templateUrl: './responsive-sidenav.component.html',
  styleUrl: './responsive-sidenav.component.scss',
})
export class ResponsiveSidenavComponent implements OnDestroy {
  protected readonly menuElements = MENU_ELEMENTS;

  protected readonly isIconView = signal(false);
  protected readonly isTablet = signal(true);
  protected readonly isMobile = signal(true);

  private readonly _tabletQuery: MediaQueryList;
  private readonly _tabletQueryListener: () => void;

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._tabletQuery = media.matchMedia('(max-width: 1024px)');
    this.isTablet.set(this._tabletQuery.matches);
    this._tabletQueryListener = () => {
      this.isTablet.set(this._tabletQuery.matches);
      if (this._tabletQuery.matches) {
        this.isIconView.set(true);
      } else {
        this.isIconView.set(false);
      }
    }
    this._tabletQuery.addEventListener('change', this._tabletQueryListener);

    this._mobileQuery = media.matchMedia('(max-width: 430px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);

    this._tabletQuery.dispatchEvent(new Event('change'));
    this._mobileQuery.dispatchEvent(new Event('change'));
  }

  public ngOnDestroy(): void {
    this._tabletQuery.removeEventListener('change', this._tabletQueryListener);
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public toggleIconView(): void {
    this.isIconView.set(!this.isIconView());
  }
}
