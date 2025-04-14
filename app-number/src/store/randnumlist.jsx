export const initialState = {
    randNums : []
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':

            const randNums = [...state.randNums, {num : action.payload}];

            return { ...state, randNums : randNums};

        case 'SHUFFLE':

            const shuffledNums = [...state.randNums.sort((a, b) => 0.5 - Math.random()) ];

            return { ...state, randNums : shuffledNums};

        default:
            return state;
    }
}