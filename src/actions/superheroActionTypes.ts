export type SuperheroType = {
    id: number;
    name: string;
    biography: SuperheroBio;
    image: {
        url: string;
    }
}

interface SuperheroBio {
    'full-name': string;
    publisher: string;
}

// Dispatch type options
export const SUPERHERO_LOADING = "SUPERHERO_LOADING";
export const SUPERHERO_FAIL = "SUPERHERO_FAIL";
export const SUPERHERO_SUCCESS = "SUPERHERO_SUCCESS";


interface SuperheroLoading {
    type: typeof SUPERHERO_LOADING;
}

interface SuperheroFail {
    type: typeof SUPERHERO_FAIL;
}

interface SuperheroSuccess {
    type: typeof SUPERHERO_SUCCESS;
    payload: SuperheroType
}

// Specifies action types for reducer
export type SuperheroDispatchTypes = SuperheroLoading | SuperheroFail | SuperheroSuccess;