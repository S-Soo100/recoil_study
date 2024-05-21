// components/Loader.js
import React from "react";
import { Grid, Oval } from "react-loader-spinner";
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

const Loader = ({
  loading,
  size = "80",
}: {
  loading: boolean;
  size?: string;
}) => {
  if (!loading) return <div></div>;
  return (
    <LoaderOverlay>
      <LoaderStyle className="loader-container">
        <Grid
          visible={loading}
          height={size}
          width={size}
          color="#7BAFD4"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
        {/* <Oval
          height={size}
          width={size}
          color="#7D55C7"
          visible={loading}
          ariaLabel="oval-loading"
          secondaryColor="#D5C2D8"
          strokeWidth={8}
          strokeWidthSecondary={6}
        /> */}
      </LoaderStyle>
    </LoaderOverlay>
  );
};

export default Loader;
