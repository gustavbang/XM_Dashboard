var deepFreeze = require('deep-freeze');
import { headlineReducer, defaultState } from './headline.reducer';
import * as types from '../actions/headline.actions'


describe('Language Reducers:', () => {

  it('should return the initial state', () => {
    expect(headlineReducer(undefined, {})).toEqual(defaultState);
  });

it('should upvote the likes', () => {
  const startState = defaultState;
  const endState = 1;
  deepFreeze(endState);

  expect( headlineReducer(startState, 
    {
      type: types.UPVOTE,
    })).toEqual({text: "buzy",  likes: endState});
    //start 2 end 1
  });


  it('should change text correctly', () => {
    // Initial state
    let startState = defaultState;
    let endState = defaultState;
    endState.text = "Testing"

    // Checks for state mutations.
    deepFreeze(startState);
  
    // Expect, after calling reducer with state and action => new state is returned without mutations.
    expect( headlineReducer(startState, 
      {
        type: types.EDIT_TEXT,
        payload: 'Testing'
      })).toEqual(endState);
    });
});


