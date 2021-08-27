import { 
    SuperheroDispatchTypes,
    SuperheroType,
    SUPERHERO_SUCCESS,
    SUPERHERO_LOADING,
    SUPERHERO_FAIL
} from "../actions/superheroActionTypes";

interface IDefaultState {
    loading: boolean;
    superhero: SuperheroType[]
}

const defaultState: IDefaultState = {
    loading: false,
    superhero: []
}


const superheroReducer = (state: IDefaultState = defaultState, action: SuperheroDispatchTypes):IDefaultState => {
    switch (action.type) {
        case SUPERHERO_FAIL:
            return {
                ...state,
                loading: false
            }
        case SUPERHERO_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SUPERHERO_SUCCESS:
            return {
                loading: false,
                superhero: [...state.superhero, action.payload]
            }
        default: 
            return state;
    }
}

export default superheroReducer;

