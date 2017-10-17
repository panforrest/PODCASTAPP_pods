import constants from '../constants'

var initialState = {
  all: null,
  selected: null
}

export default (state=initialState, action) => {
  const updated = Object.assign({}, state)
  switch(action.type){
    case constants.PODCASTS_RECEIVED:
      console.log('PODCASTS_RECEIVED:' + JSON.stringify(action.podcasts))
      updated['all'] = action.podcasts
      return updated

    case constants.PODCAST_SELECTED: 
      console.log('PODCAST_SELECTED: ' + JSON.stringify(action.podcast))
      updated['selected'] = action.podcast
      return updated 

    default:
      return state
  }
} 