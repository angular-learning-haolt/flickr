import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (localStorage.getItem('hasLogin') === '1') {
            return true;
        }
        this.router.navigate(['auth', 'login']);
        return false;

    }
    // CanActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
    // ): Observable<boolean> | Promise<boolean> | boolean {
    //     if (localStorage.getItem('user')) {
    //         return true;
    //     }
    //     else {
    //         // this.router.navigate(['photos']);
    //         return false;
    //     }
    // }
}
