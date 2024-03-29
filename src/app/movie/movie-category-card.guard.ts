import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SideBarMenu } from '../shared/side-bar/side-bar';
import { ToastrNotificationService } from '../shared/toastr-notification-service/toastr-notification.service';
import * as data from '../movie-category-config.json';

@Injectable({
  providedIn: 'root',
})
export class MovieCategoryCardGuard implements CanActivate {
  sideBarMenu: SideBarMenu[] = (data as any).default;
  constructor(
    private router: Router,
    private toastNotificationService: ToastrNotificationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const category = route.paramMap.get('category');
    const title = route.queryParamMap.get('title');
    const selectedSideBarItem = this.sideBarMenu.find(
      (menu) => menu.tag === category && menu.title === title
    );

    if (selectedSideBarItem) {
      return true;
    }

    this.toastNotificationService.showError(
      'Invalid page paramter',
      'Not Found'
    );
    this.router.navigate(['/']);

    return false;
  }
}
