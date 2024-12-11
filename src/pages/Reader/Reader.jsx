import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";

function Reader() {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragEnterDropBox = (event) => {
    event.preventDefault();
    console.log("dragging Enter");
  };

  const handleDragLeaveDropBox = (event) => {
    event.preventDefault();
    console.log("dragging left");
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <PageLayout>
      <div className="h-full flex justify-center items-center">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={handleDragEnterDropBox}
          onDragLeave={handleDragLeaveDropBox}
          className="bg-gray-100 rounded-lg p-8 max-w-sm border-dotted border-2 border-gray-600"
        >
          <h2 className="text-xl font-semibold mb-4">Drop Your File Here</h2>
          <div
            className="bg-gray-200 rounded-lg p-4 cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
          >
            Drag files here
          </div>

          {files.length > 0 && (
            <ul className="mt-4">
              {files.map((file, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <span className="mr-2">{file.name}</span>
                  <button
                    onClick={() => setFiles(files.filter((f) => f !== file))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!files.length && (
            <p className="mt-4 text-gray-600">No files uploaded yet</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Reader;
