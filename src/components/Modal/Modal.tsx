import React, { LegacyRef } from "react";
import useClickOutside from "@/utils/hooks/useClickOutside";
import { ModalStyle } from "./Modal.style";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  visible: boolean;
};
const Modal = ({ children, onClose, visible }: Props) => {
  const ref: LegacyRef<HTMLDivElement> = useClickOutside(() => {
    onClose();
  });

  return (
    <ModalStyle visible={visible}>
      <div className='card' ref={ref}>
        <Icon icon='cil:x' className='close' onClick={onClose} />
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
