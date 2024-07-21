import { File } from "../types/file";
import FileRow from "./FileRow";
import styles from "../page.module.css";

type FileTableProps = {
  files: File[];
  selectedFiles: Set<string>;
  onToggleSelectFile: (fileName: string) => void;
};

const FileTable = ({
  files,
  selectedFiles,
  onToggleSelectFile,
}: FileTableProps) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Device</th>
        <th>Path</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      {files.map((file) => (
        <FileRow
          key={file.name}
          file={file}
          isSelected={selectedFiles.has(file.name)}
          onSelect={() => onToggleSelectFile(file.name)}
        />
      ))}
    </tbody>
  </table>
);

export default FileTable;
