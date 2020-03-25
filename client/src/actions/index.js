import urlApi from "../api/shortener";

export const fetchUrls = () => async dispatch => {
  const resp = await urlApi.get("/");

  if (resp.data) {
    dispatch({
      type: "FETCH_URL",
      payload: resp.data.result
    });
  }
};

export const addUrl = (longUrl, code) => async dispatch => {
  const resp = await urlApi.get(`/shorten?longurl=${longUrl}&code=${code}`);

  if (resp.data) {
    dispatch({
      type: "ADD_URL",
      payload: resp.data.result
    });
  }
};

export const deleteUrl = id => async dispatch => {
  const resp = await urlApi.get(`/delete?id=${id}`);

  if (resp.data) {
    dispatch({
      type: "DELETE_URL",
      payload: id
    });
  }
};

export const editUrl = (id, longurl, code) => async dispatch => {
  const resp = await urlApi.get(
    `/edit?id=${id}&longurl=${longurl}&code=${code}`
  );

  if (resp.data) {
    dispatch({
      type: "EDIT_DATA",
      payload: resp.data.result
    });
  }
};
