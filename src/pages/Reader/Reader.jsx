import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";

function Reader() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [previewContent, setPreviewContent] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(() => true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(() => false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(() => false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      generatePreview(selectedFile);
    }
  };

  const generatePreview = (file) => {
    console.log(file);
    const reader = new FileReader();
    const fileType = file.type;
    if (fileType.startsWith("image")) {
      reader.onload = (e) =>
        setPreviewContent(
          <img
            src={e.target.result}
            alt="Preview"
            className="max-w-full max-h-96"
          />
        );
      reader.readAsDataURL(file);
    } else if (fileType === "application/pdf") {
      reader.onload = (e) => {
        setPreviewContent(
          <iframe
            src={e.target.result}
            title="PDF Preview"
            className="w-full h-full"
          />
        );
      };
      reader.readAsDataURL(file);
    } else if (
      [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ].includes(fileType)
    ) {
      import("mammoth").then((mammoth) => {
        reader.onload = async (e) => {
          const result = await mammoth.extractRawText({
            arrayBuffer: e.target.result,
          });
          setPreviewContent(
            <div className="whitespace-pre-wrap text-sm">{result.value}</div>
          );
        };
        reader.readAsArrayBuffer(file);
      });
    } else if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      import("xlsx").then((xlsx) => {
        reader.onload = (e) => {
          const workBook = xlsx.read(e.target.result, { type: "array" });
          const sheetName = workBook.SheetNames[0];
          const sheet = workBook.Sheets[sheetName];
          const sheetData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
          setPreviewContent(<div dangerouslySetInnerHTML={{ __html: sheetData }} />);
        };
        reader.readAsArrayBuffer(file);
      });
    }
  };

  return (
    <PageLayout>
      {previewContent}
      <div className="flex flex-col items-center justify-center h-full">
        <div
          className={`border-4 border-dashed p-10 mx-5 rounded-lg transition-all duration-300 ${
            isDragging ? "border-blue-500 bg-blue-100/20" : "border-gray-300"
          } hover:border-[rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]`}
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
            <div className="w-full text-center text-lg font-semibold text-gray-500 pointer-events-none">
              Drag & Drop your file here or click to select
            </div>
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
