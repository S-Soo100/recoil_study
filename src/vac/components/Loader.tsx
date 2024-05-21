// components/Loader.js
import React from "react";
import { Oval } from "react-loader-spinner";
import styled from "@emotion/styled";

const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  z-index: 1000; /* 다른 요소들 위에 위치 */
`;

const Loader = ({ loading }: { loading: boolean }) => {
  if (!loading) return <div></div>;
  return (
    <LoaderOverlay>
      <LoaderStyle className="loader-container">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={loading}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoaderStyle>
    </LoaderOverlay>
  );
};

export default Loader;
