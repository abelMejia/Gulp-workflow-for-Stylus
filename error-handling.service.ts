import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
    error = new BehaviorSubject<string | HttpErrorResponse | null>(null);
    error$ = this.error.asObservable();

    constructor() { }

    getErrorSubject(): Observable<string | HttpErrorResponse | null> {
        return this.error$;
    }

    handleError(error: string | HttpErrorResponse | null): void {
        if(!error) { return; }
        console.log('error', error);

        if (error instanceof HttpErrorResponse) {
            const { message } = error;
            console.warn('ERROR ----->');
            console.error(message);
            return;
        }

        if (typeof error === 'string' ) {
            console.warn('ERROR ----->');
            console.error(error);
        }

    } 

    setError(error: string | HttpErrorResponse | null): void {
        this.error.next(error);
    }

}
