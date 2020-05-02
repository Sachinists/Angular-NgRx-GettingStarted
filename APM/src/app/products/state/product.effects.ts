import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.LoadProductList),
        mergeMap((action : productActions.LoadProductList) => this.productService.getProducts().pipe(
            map((products: Product[]) => new productActions.LoadProductListSuccess(products)),
            catchError(err => of(new productActions.LoadProductListFailure(err)))
        ))
    );
}