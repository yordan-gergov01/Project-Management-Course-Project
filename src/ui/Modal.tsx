import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { ModalHandle } from "../types/types";
import { ModalProps } from "../types/interfaces";

import Button from "./Button";

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, buttonCaption },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current?.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
