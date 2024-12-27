import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";

function Reader() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <div
          className={`relative min-w-[450px] border-4 border-dashed p-10 rounded-lg transition-colors duration-300 ${
            isDragging ? "border-blue-500 bg-blue-100/20" : "border-gray-300"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          {file ? (
            <div>
              <p className="text-lg font-semibold">File Selected:</p>
              <p>{file.name}</p>
            </div>
          ) : (
            <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-50 w-full text-center text-lg font-semibold text-gray-500">
              Drag & Drop your file here or click to select
            </p>
          )}
        </div>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
    </PageLayout>
  );
}

export default Reader;
