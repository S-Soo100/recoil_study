"use client";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f7;
  padding: 32px;
`;

const UploadBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 16px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;

const Input = styled.input`
  margin-bottom: 24px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  transition: background-color 0.3s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #005bb5;
  }
`;

const BackButton = styled(Button)`
  background-color: #ccc;
  position: absolute;
  top: 32px;
  left: 32px;
  padding: 8px 16px;
  &:hover:not(:disabled) {
    background-color: #aaa;
  }
`;

interface IProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
  uploading: boolean;
  selectedFile: File | null;
}

const ViewUploadPage = ({
  onFileChange,
  onUpload,
  uploading,
  selectedFile,
}: IProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>뒤로가기</BackButton>
      <UploadBox>
        <Title>File Upload</Title>
        <Description>
          Select a file to upload and click the button below to start the upload
          process.
        </Description>

        <Input type="file" onChange={onFileChange} />
        <Button onClick={onUpload} disabled={uploading || !selectedFile}>
          {uploading ? "Uploading..." : "Upload File"}
        </Button>
      </UploadBox>
    </Container>
  );
};

export default ViewUploadPage;
