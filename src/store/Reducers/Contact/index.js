import { GET_LIST_CONTACT, POST_NEW_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "../../Actions/contact.action"

const initialState = {
    getListContactResult: false,
    getListContactLoading: true,
    getListContactError: false,
    postNewContactResult: false,
    postNewContactLoading: true,
    postNewContactError: false,
    deleteContactLoading: true,
    deleteContactError: false,
    updateContactLoading: true,
    updateContactError: false,
}

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
        return {
            ...state,
            getListContactResult: action.payload.data.data,
            getListContactLoading: action.payload.loading,
            getListContactErrorMessage: action.payload.error,
        }
    case POST_NEW_CONTACT:
        return {
          ...state,
          postNewContactResult: action.payload.data.data,
          postNewContactLoading: action.payload.loading,
          postNewContactError: action.payload.error,
        }
    case UPDATE_CONTACT:
        return {
          ...state,
          updateContactLoading: action.payload.loading,
          updateContactError: action.payload.error,
        }
    case DELETE_CONTACT:
        return {
          ...state,
          deleteContactLoading: action.payload.loading,
          deleteContactError: action.payload.error,
        }
    default:
      return state
  }
}

export default contact
