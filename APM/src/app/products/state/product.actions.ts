import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    DeleteCurrrentProduct = '[Product] Delete Current Product',
    AddNewProduct = '[Product] Add New Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    LoadProductList = '[Product] Load productlist from server',
    LoadProductListSuccess = '[Product] Successfull loading of Product List',
    LoadProductListFailure = '[Product] Fail to load Product List',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Poduct Success',
    UpdateProductFailure = '[Product] Update Product Failure'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode

    constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct

    constructor(public payload: Product) {}
}

export class DeleteCurrrentProduct implements Action {
    readonly type = ProductActionTypes.DeleteCurrrentProduct
}

export class AddNewProduct implements Action {
    readonly type = ProductActionTypes.AddNewProduct

    constructor(public payload: Product) {}
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct
}

export class LoadProductList implements Action {
    readonly type = ProductActionTypes.LoadProductList
}

export class LoadProductListSuccess implements Action {
    readonly type = ProductActionTypes.LoadProductListSuccess

    constructor(public payload: Product[]) {}
}

export class LoadProductListFailure implements Action {
    readonly type = ProductActionTypes.LoadProductListFailure

    constructor(public payload: String){}
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct

    constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess

    constructor(public payload: Product) { }
}

export class UpdateProductFailure implements Action {
    readonly type = ProductActionTypes.LoadProductListFailure

    constructor(public payload: String){}
}


export type ProductActions =    ToggleProductCode | SetCurrentProduct | DeleteCurrrentProduct | AddNewProduct | InitializeCurrentProduct |
    LoadProductList | LoadProductListSuccess | LoadProductListFailure | UpdateProduct | UpdateProductSuccess | UpdateProductFailure