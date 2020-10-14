import { useContext } from "react";
import { ModalDispatcherContext } from "../providers/modal-provider";
import T from "../type";

export function ModalActions() {
  const dispatch = useContext(ModalDispatcherContext);

  const dispatchOpenModal = () => {
    dispatch({ type: T.OPEN_MODAL });
  };

  const dispatchCloseModal = () => {
    dispatch({ type: T.OPEN_MODAL });
  };

  return {
    dispatchOpenModal,
    dispatchCloseModal,
  };
}
