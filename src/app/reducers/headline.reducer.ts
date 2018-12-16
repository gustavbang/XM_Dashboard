import { Headline } from './../entities/Headline';
import * as HeadlineActions from '../actions/headline.actions';

export type Action = HeadlineActions.All;

const defaultState: Headline = {
    text: 'XM-Dashboard',
    likes: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function headlineReducer(state : Headline = defaultState, action: Action) {
    console.log(action.type)

    switch(action.type) {
        case HeadlineActions.EDIT_TEXT:
            return newState(state, { text: action.payload });

        case HeadlineActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });

        case HeadlineActions.DOWNVOTE:
            return newState(state, { likes: state.likes -1 });

        case HeadlineActions.RESET:
            return defaultState;

        default: 
            return state;
    }
}