import { Action } from '@ngrx/store';


export const ENGLISH = '@Post ENGLISH';
export const DANISH = '@Post DANISH';


export class English implements Action {
    payload: any;
    readonly type = ENGLISH
}

export class Danish implements Action {
    payload: any;
    readonly type = DANISH
}

export type All
= English
| Danish;