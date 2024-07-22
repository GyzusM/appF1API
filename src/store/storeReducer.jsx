const types = {
  searchConstructor: 'search - constructor',
  searchDriver: 'search - driver',
  searchSchedule: 'search - schedule'
}

const initialStore = {
  search: 'driver'
}

const storeReducer = (state, action) => {
  switch(action.type) {
    case types.searchConstructor:
      return {
        ...state,
        search: 'constructor'
      }
    case types.searchDriver:
      return{
        ...state,
        search: 'driver'
      }
    case types.searchSchedule:
      return{
        ...state,
        search: 'calendar'
      }  
    default:
      return state
  }
}

export { initialStore, types }
export default storeReducer