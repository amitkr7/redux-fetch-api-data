import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

//2015 ES Syntax
export const fetchUser = (id) => (dispatch) => _fetchuser(id, dispatch);
const _fetchuser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
});
