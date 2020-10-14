import React from "react";
import { ModalContext } from "../context/providers/modal-provider";

export function useModalContext() {
  return React.useContext(ModalContext);
}
