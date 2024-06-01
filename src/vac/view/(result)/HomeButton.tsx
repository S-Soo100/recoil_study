"use client";
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

const HomeButtonStyle = styled.button`
  background-color: #fefcfa;
  color: #4e4e4e;
  border: none;
  border-radius: 0.375rem;
  padding: 0.3rem 0.7rem;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 3px 17px 3px rgb(0 0 0 / 0.2);
  }
`;

const HomeIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
export default function HomeButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <HomeButtonStyle onClick={onClick}>
      <HomeIcon>🏠</HomeIcon>
      {" Home"}
    </HomeButtonStyle>
  );
}
