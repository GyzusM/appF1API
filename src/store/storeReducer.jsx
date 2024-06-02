const types = {
  searchConstructor: 'search - constructor',
  searchDriver: 'search- driver'
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
    default:
      return state
  }
}

export { initialStore, types }
export default storeReducer