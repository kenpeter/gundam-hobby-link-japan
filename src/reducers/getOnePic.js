import { getOnePic } from "../api/product";

export const GET_ONE_PIC_SUCCESS = "app/home/GET_ONE_PIC_SUCCESS";

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ""
};

export const getOnePicReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ONE_PIC_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ""
      };
    default:
      return state;
  }
};

export const getOnePicSuccess = data => {
  return {
    type: GET_ONE_PIC_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ""
  };
};

export const getOnePicAPI = () => {
  return dispatch => {
    getOnePic()
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(getOnePicSuccess(data));
      })
      .catch(err => {});
  };
};
