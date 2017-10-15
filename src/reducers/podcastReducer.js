import constants from '../constants'

var initialState = {
  
}

export default (state=initialState, action) => {
  const updated = Object.assign({}, state)
  switch(action.type){
    case constants.PODCASTS_RECEIVED:
      console.log('PODCASTS_RECEIVED:' + JSON.stringify(action.podcasts))
      return updated

    default:
      return state
  }
} 