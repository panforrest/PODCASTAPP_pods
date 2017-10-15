import constants from '../constants'

export default {
    
  searchPodcasts: (params) => {
    console.log('searchPodcasts: ' + JSON.stringigy(params))
  },

  podcastsReceived: (podcasts) =>{
    return{
  	  type: constants.PODCASTS_RECEIVED,
  	  podcasts: podcasts
    }
  }
}