import {Action} from '@ngrx/store';

export function languageReducer(state: string='Hello World', action: Action) {
    
    console.log(action.type)

    switch(action.type) {
        case 'ENGLISH':
            return state = 'Hello world!'

        case 'DANISH':
            return state = 'Hej verden!'

        default:
            return state;
    }
}