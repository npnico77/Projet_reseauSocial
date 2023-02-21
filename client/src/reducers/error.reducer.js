import { GET_POST_ERRORS } from "../actions/post.actions";

const initialState = { postError: [] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return { postError: action.payload, setErrors: [] };
    default:
      return state;
  }
}
