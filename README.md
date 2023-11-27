# Settings
1. Go to the `src/app/app-routing.module.ts` 
2. set the code below.
```
  import { routes } from './app.routes';

```
3. Provide a custom title strategy by extending the TitleStrategy.
```
    import { TemplatePageTitleStrategy } from './title.service';

    providers: [
        {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    ]
```

4. remove the code below.
```
  const routes: Routes = [];
```


5. Insert the below code in your `app template`
```
    <button type="button" routerLink="/login" routerLinkActive="active">Login</button>
    <button type="button" routerLink="/home" routerLinkActive="active">Home</button>
    <button type="button" routerLink="/register" routerLinkActive="active">register</button>
    <button type="button" routerLink="/forgot-password" routerLinkActive="active">forgot-password</button>
    <button type="button" routerLink="/cart" routerLinkActive="active">Cart</button>
    <button type="button" routerLink="/shop" routerLinkActive="active">Shop</button>
    <button type="button" routerLink="/product" routerLinkActive="active">Product</button>
    <button type="button" routerLink="/checkout" routerLinkActive="active">Checkout</button>
```
