const initialState = {
    value: 0,
    min: 0,
    max: 5
}

export type InitialStateType = typeof initialState

const counterReducer = (state: InitialStateType = initialState, action: CounterACType): InitialStateType => {

    switch (action.type) {
        case 'CHANGE-COUNTER-VALUE':
            return {...state, value: action.payload.value}
        case 'CHANGE-MAX-VALUE':
            return {...state, max: action.payload.value}
        case 'CHANGE-MIN-VALUE':
            return {...state, min: action.payload.value}
        default:
            return state
    }

}

export type CounterACType = ChangeCounterValueACType | ChangeMaxValueACType | ChangeMinValueACType

export type ChangeCounterValueACType = ReturnType<typeof changeCounterValueAC>
export const changeCounterValueAC = (value: number) => {
    return {
        type: 'CHANGE-COUNTER-VALUE',
        payload: {
            value
        }
    } as const
}

export type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            value
        }
    } as const
}

export type ChangeMinValueACType = ReturnType<typeof changeMinValueAC>
export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        payload: {
            value
        }
    } as const
}

export default counterReducer;