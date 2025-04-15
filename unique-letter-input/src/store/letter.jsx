export const initialState = {
    letters : []
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':

            const letters = [...state.letters,  action.payload];

            return { ...state, letters : letters};

        case 'SHUFFLE':

            const shuffledLetters = [...state.letters.sort((a, b) => 0.5 - Math.random()) ];

            return { ...state, shuffledLetters};

        default:
            return state;
    }
}