const initialState = {
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAGA':
      return {
        ...state,
        loading: true
      }
    case 'SAGA_SUCCEEDED':
      return {
        ...state,
        loading: false
      }
    case 'SAGA_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const sagaActionCreator = () => ({ type: 'SAGA' })
export const sagaSucceededActionCreator = (result) => ({ type: 'SAGA_SUCCEEDED', result: result })
export const sagaFailedActionCreator = (error) => ({ type: 'SAGA_FAILED', error: error })

export default reducer
