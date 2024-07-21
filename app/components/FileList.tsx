"use client";

import React, { useState } from "react";
import styles from "../page.module.css";
import Header from "./Header";
import { File, FileStatus } from "../types/file";
import FileTable from "./FileTable";

const FileList = ({ files }: { files: File[] }) => {
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());

  const availableFiles = files.filter(
    (file: File) => file.status === FileStatus.available
  );

  const isAllSelected =
    selectedFiles.size === availableFiles.length && availableFiles.length > 0;
  const isSomeSelected =
    selectedFiles.size > 0 && selectedFiles.size < availableFiles.length;

  const toggleSelectAll = () => {
    setSelectedFiles(
      isAllSelected
        ? new Set()
        : new Set(availableFiles.map((file: File) => file.name))
    );
  };

  const toggleSelectFile = (fileName: string) => {
    setSelectedFiles((prevSelectedFiles) => {
      const newSet = new Set(prevSelectedFiles);
      newSet.has(fileName) ? newSet.delete(fileName) : newSet.add(fileName);
      return newSet;
    });
  };

  const handleDownloadSelected = () => {
    const selectedFilesInfo = files
      .filter((file: File) => selectedFiles.has(file.name))
      .map((file: File) => `${file.path} (${file.device})`);
    alert(selectedFilesInfo.join("\n"));
  };

  return (
    <section className={styles.fileList}>
      <Header
        isAllSelected={isAllSelected}
        isSomeSelected={isSomeSelected}
        selectedCount={selectedFiles.size}
        onToggleSelectAll={toggleSelectAll}
        onDownloadSelected={handleDownloadSelected}
      />

      <FileTable
        files={files}
        selectedFiles={selectedFiles}
        onToggleSelectFile={toggleSelectFile}
      />
    </section>
  );
};

export default FileList;
