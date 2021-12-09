import axios from 'axios';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import { ActionType } from '../actions/action-types';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search?text=react', {params: {text: term}})
            const names = data.objects.map((result) => {
                return result.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    };
};
