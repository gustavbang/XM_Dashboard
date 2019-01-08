import { Language } from './../entities/Language';
import * as LanguageActions from '../actions/language.actions';

export type Action = LanguageActions.All;

export const defaultState: Language = {
    menuOne: 'Weather',
    menuTwo: 'CryptoCurrency',
    menuThree: 'Groceries'
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function languageReducer(state: Language = defaultState, action: any) {
    console.log(action.type)

    switch(action.type) {
        case LanguageActions.ENGLISH:
            return defaultState;


        case LanguageActions.DANISH:
            return newState(state, { menuOne: "Vejret", menuTwo: "Krypto Valuta", menuThree: "Indkøb"});

        default:
            return state;
    }
}