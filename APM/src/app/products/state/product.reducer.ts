import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductState {
    showProductCode: boolean,
    currentProductID: number | null
    products: Product[],
    error: String
}

export interface State extends fromRoot.AppState {
    products: ProductState;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductID: null,
    products: [],
    error: ''
}

const getProductFeatureState = createFeatureSelector<ProductState>('products')

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
)

export const getCurrentProductID = createSelector(
    getProductFeatureState,
    state => state.currentProductID
)

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductID,
    (state, ID) => {
        if (ID === 0) {
            return {
                id: 0,
                productName: '',
                productCode: 'NEW',
                description: '',
                starRating: 0
            }
        } else {
            return ID ? state.products.find(p => p.id === ID) : null;
        }
    }
)

export const getProductLists = createSelector(
    getProductFeatureState,
    state => state.products
)

export const gettError = createSelector(
    getProductFeatureState,
    state => state.error
)

export function reducer(state = initialState, action: ProductActions): ProductState {
    console.log(state)
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            }
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductID: action.payload.id
            }
        case ProductActionTypes.DeleteCurrrentProduct:
            return {
                ...state,
                currentProductID: null
            }
        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProductID: 0
            }
        case ProductActionTypes.LoadProductListSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            }
        case ProductActionTypes.LoadProductListFailure:
            return {
                ...state,
                products: [],
                error: action.payload
            }
        default:
            return state
    }
}