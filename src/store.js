import { createStore, applyMiddleware } from 'redux'
import { api, deleteInspirationDb } from './api.js'

const initialState = {
  inspirations: [],
  inspiration: {},
  currentImageUrl: '',
  mySlides: [ // à mettre en place
    `${api}/images/yoga-alice-carr-5.jpg`,
    `${api}/images/yoga-alice-carr-2.jpg`,
    `${api}/images/yoga-alice-carr-3.jpg`,
    `${api}/images/yoga-alice-carr-4.jpg`
  ],
  currentSlide: 0,
  errors: {},
  profile: {
    email: localStorage.email
  },
  blocs: [],
  quotation: [],
  contactHome: {}
}

const reducer = (state, action) => {
  if (action.type === 'LOAD_CAROUSEL') {
    return {
      ...state,
      mySlides: action.carousel
    }
  }

  if (action.type === 'LOAD_BLOCS') {
    return {
      ...state,
      blocs: action.blocs
    }
  }
  if (action.type === 'LOAD_INSPIRATIONS') {
    return {
      ...state,
      inspirations: action.inspirations
    }
  }

  if (action.type === 'LOAD_INSPIRATION') {
    console.log('je suis dans le state')
    return {
      ...state,
      inspiration: action.inspiration
    }
  }

  if (action.type === 'LOAD_CURRENT_IMAGE_URL') {
    return {
      ...state,
      currentImageUrl: action.imageUrl
    }
  }

  if (action.type === 'UPDATE_CURRENT_SLIDE') {
    return {
      ...state,
      currentSlide: action.nextSlide
    }
  }

  if (action.type === 'UPDATE_INSPIRATION') {
    return {
      ...state,
      inspiration: {
        ...state.inspiration,
        ...action.inspirationContent
      }
    }
  }

  if (action.type === 'DELETE_INSPIRATION') {
    return {
      ...state,
      inspirations: [
        ...state.inspirations.slice(0, state.inspirations.indexOf(action.inspirationContent)),
        ...state.inspirations.slice(state.inspirations.indexOf(action.inspirationContent) + 1)
      ]
    }
  }

  if (action.type === 'UPDATE_ERROR') {
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.error.type]: action.error.message
      }
    }
  }

  if (action.type === 'UPDATE_PROFILE') {
    return {
      ...state,
      profile: {
        ...state.profile,
        email: action.profile
      }
    }
  }

  return state
}

const updateDatabase = store => next => async action => {
  /// CHECKS
  next(action)
  /// SIDE EFFECTS
  // const state = store.getState()

  if (action.type === 'DELETE_INSPIRATION') {
    await deleteInspirationDb({
      id: action.inspirationContent.id
    })
  }
}

export const store = createStore(reducer, initialState, applyMiddleware(updateDatabase))

export const actions = {
  loadCarousel: carousel => store.dispatch({ type: 'LOAD_CAROUSEL', carousel }),
  loadHomeBlocs: blocs => store.dispatch({ type: 'LOAD_BLOCS', blocs }),
  loadInspirations: inspirations => store.dispatch({ type: 'LOAD_INSPIRATIONS', inspirations }),
  loadInspiration: inspiration => store.dispatch({ type: 'LOAD_INSPIRATION', inspiration }),
  loadCurrentImageUrl: imageUrl => store.dispatch({ type: 'LOAD_CURRENT_IMAGE_URL', imageUrl }),
  updateCurrentSlide: nextSlide => store.dispatch({ type: 'UPDATE_CURRENT_SLIDE', nextSlide }),
  updateInspiration: inspirationContent => store.dispatch({ type: 'UPDATE_INSPIRATION', inspirationContent }),
  deleteInspiration: inspirationContent => store.dispatch({ type: 'DELETE_INSPIRATION', inspirationContent }),
  showError: (type, message) => store.dispatch({ type: 'UPDATE_ERROR', error: { type, message } }),
  updateProfile: (profile) => store.dispatch({ type: 'UPDATE_PROFILE', profile })
}
