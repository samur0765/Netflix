import api from "../../utils/api";
import ActionTypes from "../reducers/actionType";

//Kullanıcı id'si
const account_id = "21981530";

//Listedeki filmleri alıp reducer'a aktaran thunk aksiyonu
export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

//İzleme listesine ekleme çıkarma yapan thunk aksiyonu
export const toggleWatchList = (movie, isAdd) => async (dispatch) => {
  //body içeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  //api'a istek at
  api
    .post(`account/${account_id}/watchlist`, body)
    .then(() => {
      //ekleme çıkarma durumuna göre reducer'a haber ver
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};
