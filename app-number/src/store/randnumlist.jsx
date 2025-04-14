export const initialState = {
    randNums : []
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_RANDNUM':

            const randNums = [...state.randNums, {num : action.payload}];

            return { ...state, randNums : randNums};

        default:
            return state;
    }
}