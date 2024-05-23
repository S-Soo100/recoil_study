// components/AnswerOverlay.tsx

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface ChoiclModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  index: number;
  handleYes: () => void;
  handleCancel: () => void;
}

const ChoiceModal: React.FC<ChoiclModalProps> = ({
  isOpen,
  onClose,
  content,
  index,
  handleYes,
  handleCancel,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={handleCancel}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleCancel}>&times;</CloseButton>
        <div className="mx-auto flex flex-col gap-4 my-4">
          <h3 className="text-xl lg:text-2xl font-semibold">{content}</h3>
          <h3 className="text-lg lg:text-xl text-slate-700">
            이 답변을 선택하시겠습니까?
          </h3>
        </div>
        <div className="flex flex-row gap-2 mx-auto justify-center">
          <CancelButton onClick={handleCancel}>아니오</CancelButton>
          <Button onClick={handleYes}>네</Button>
        </div>
      </Content>
    </Overlay>
  );
};

export default ChoiceModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 1080px) {
    width: 40%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  max-width: 250px;

  &:hover {
    background-color: #005bb5;
  }
`;
const CancelButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4e514e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  max-width: 250px;

  &:hover {
    background-color: #3f3f3f;
  }
`;
