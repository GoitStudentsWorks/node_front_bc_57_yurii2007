import { createPortal } from "react-dom";
import React, { useCallback, useEffect } from "react";

import { useModal } from "../ModalContext/ModalContextProvider";

import SettingModal from "../SettingModal/SettingModal";
import TodayListModal from "../TodayListModal/TodayListModal";
import OverlayStyle from "./Overlay.styled";
import LogOut from "../LogOut/LogOut";

const Overlay = () => {
  const { modalName, isOpenModal, closeModal } = useModal();

  const openedModal = useCallback(() => {
    switch (modalName) {
      case "logout":
        return <LogOut closeModal={closeModal} />;
      case "todayListModal":
        return <TodayListModal closeModal={closeModal} />;
      case "deletePopUp":
        return null; // return <Component closeModal={closeModal} />
      case "settings":
        return <SettingModal closeModal={closeModal} />;
      case "dailyNorma":
        return null; // return <DailyNormaModal closeModal={closeModal} />
      case "addWater":
        return null; // return <AddWater closeModal={closeModal} />
      default:
        return null;
    }
  }, [modalName]);

  const backdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeModal();
    },
    [closeModal]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    if (!isOpenModal) {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown, isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

  return (
    createPortal(
      <OverlayStyle onClick={backdropClick}>{openedModal()}</OverlayStyle>
    ),
    document.body
  );
};

export default Overlay;
