"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

const ModalContext = createContext({
  modal: { active: false, index: -1 },
  setModal: (modal: { active: boolean; index: number }) => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState({ active: false, index: -1 });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
