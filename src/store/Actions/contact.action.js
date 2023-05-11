import axios from 'axios'

export const GET_LIST_CONTACT = 'GET_LIST_CONTACT'
export const POST_NEW_CONTACT = 'POST_NEW_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        error: false,
        message: '',
      },
    })

    axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_API_BASE_URL}contact/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 12000,
    })
      .then((response) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            error: false,
            message: '',
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            error: true,
            message: error.message,
          },
        })
      })
  }
}

export const updateContact = (id, payload) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: false,
        error: false,
        message: '',
      },
    })

    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_BASE_URL}contact/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
      timeout: 12000,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            error: false,
            message: '',
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: false,
            error: true,
            message: error.message,
          },
        })
      })
  }
}
export const postNewContact = (payload) => {
  return (dispatch) => {
    dispatch({
      type: POST_NEW_CONTACT,
      payload: {
        loading: true,
        data: false,
        error: false,
        message: '',
      },
    })

    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_BASE_URL}contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
      timeout: 12000,
    })
      .then((response) => {
        dispatch({
          type: POST_NEW_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            error: false,
            message: '',
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: POST_NEW_CONTACT,
          payload: {
            loading: false,
            data: false,
            error: true,
            message: error.message,
          },
        })
      })
  }
}

export const getListContact = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        error: false,
        message: '',
      },
    })

    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 12000,
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: response.data,
            error: false,
            message: '',
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            error: true,
            message: error.message,
          },
        })
      })
  }
}
