import { Language } from './../entities/Language';
import * as LanguageActions from '../actions/language.actions';

export type Action = LanguageActions.All;

const defaultState: Language = {
    menuOne: 'Weather',
    menuTwo: 'Crypto Valuta',
    menuThree: 'Recipes'
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function languageReducer(state: Language = defaultState, action: Action) {
    console.log(action.type)

    switch(action.type) {
        case LanguageActions.ENGLISH:
            return defaultState;


        case LanguageActions.DANISH:
            return newState(state, { menuOne: "Vejret", menuTwo: "Krypto Valuta", menuThree: "Opskrifter"});

        default:
            return state;
    }
}