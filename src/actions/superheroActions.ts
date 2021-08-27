import axios from "axios";

// Used to specify type of dispatch inner function parameter
import { Dispatch } from "redux";

import { 
    SuperheroDispatchTypes,
    SUPERHERO_FAIL,
    SUPERHERO_LOADING,
    SUPERHERO_SUCCESS 
} from "./superheroActionTypes";

export const getSuperheroTeam = () => async (dispatch: Dispatch<SuperheroDispatchTypes>) => {

    const randomIds = [1,2,3,4,5].map(() => Math.round(Math.random() * 730 + 1));

    randomIds.map( async (id) => {
        console.log(id)
        try {
            dispatch({
                type: SUPERHERO_LOADING
            });
    
            const res = await axios.get(`api/${process.env.REACT_APP_API_KEY}/${id}`);
            dispatch({
                type: SUPERHERO_SUCCESS,
                payload: res.data
            });

        } catch(e) {
            dispatch({
                type: SUPERHERO_FAIL
            });
        }
    });
};