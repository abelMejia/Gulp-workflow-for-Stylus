# Settings
1. add the next code in `app.component.ts`.
```
  error$ = this.errorHandlingService.getErrorSubject();

  // Inject a service
  constructor(private errorHandlingService: ErrorHandlingService){}

  // In ngOnInit 
  this.error$.subscribe((error: any) => {  this.errorHandlingService.handleError(error); });
```

2. We also need to provide the interceptor we created in `app.module.ts`
```
    providers: [...HttpInterceptorProviders],
```

# Usage
1. In catchError operator
```
    getAll(): Observable<any> {
        return this.clientService.get('products2')
        .pipe(
            catchError(err => of(this.errorHandlingService.setError(err)))
        );
    }
```