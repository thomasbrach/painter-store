import { UPDATE_COLLECTIONS } from "./shop.types";

const INITIAL_STATE = { collections: null };

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
