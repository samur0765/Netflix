import ActionTypes from "./actionType";

//state'in ilk değeri
const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

//gelen aksiyona göre state'i güncelleyen fonksiyon
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: action.payload };
    case ActionTypes.ADD_TO_LIST:
      const updated = state.list.concat(action.payload);
      return { ...state, list: updated };
    case ActionTypes.REMOVE_FROM_LIST:
      const filtred = state.list.filter((i) => i.id !== action.payload.id);
      return { ...state, list: filtred };
  }
  return state;
};

export default listReducer;
