import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
}

const FabButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 56px;
  height: 56px;
  background-color: #f178b6;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ce438a;
  }
`;

const FloatingActionButton: React.FC<IProps> = ({ onClick, children }) => {
  return <FabButton onClick={onClick}>{children}</FabButton>;
};

export default FloatingActionButton;
