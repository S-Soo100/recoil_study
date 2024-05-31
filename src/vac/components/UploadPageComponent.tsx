"use client";
import React, { ReactEventHandler, useState } from "react";
import axios from "axios";
import ViewUploadPage from "../view/ViewUploadPage";

const Actions: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploading(true);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <ViewUploadPage
      onFileChange={handleFileChange}
      onUpload={handleUpload}
      uploading={uploading}
      selectedFile={selectedFile}
    />
  );
};

export default Actions;
