import { Injectable }                          from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError }              from 'rxjs';
import { map, tap, catchError }                from 'rxjs/operators';

@Injectable()

export class UsersService {
    constructor(private http:HttpClient) {  }

    getUsers() {

    }

    getUser(reference:number) {

    }

    create(user:any) {

    }

    update(user:any) {

    }

    delete(reference:number) {

    }

    private handleError(error:Response) {
        console.log(error);
        const msg = `Error status code ${error.status} status ${error}`;
        return throwError(msg);
    }
}