import T from "../type";

export const initialState = {
  modalStatus: false,
};

export function modalReducer(state, action) {
  switch (action.type) {
    case T.OPEN_MODAL:
      return { ...state, modalStatus: true };
    case T.CLOSE_MODAL:
      return { ...state, modalStatus: false };
    default:
      throw new Error();
  }
}
