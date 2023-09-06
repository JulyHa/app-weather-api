import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    acc: any;
    constructor(private router: Router, private local: LocalStorageService) {
    }

    canActivate(): boolean {
        this.acc = this.local.getLocalStorage('adminLogin')
        if (this.acc) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }


}