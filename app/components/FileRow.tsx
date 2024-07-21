import { File } from "../types/file";
import Checkbox from "./Checkbox";
import styles from "../page.module.css";

type FileRow = {
  file: File;
  isSelected: boolean;
  onSelect: () => void;
};

const FileRow = ({ file, isSelected, onSelect }: FileRow) => (
  <tr className={`${styles.row} ${isSelected ? styles.selected : ""}`}>
    <td>
      <Checkbox
        checked={isSelected}
        onChange={onSelect}
        disabled={file.status !== "available"}
      />
    </td>

    <td>{file.name}</td>
    <td>{file.device}</td>
    <td>{file.path}</td>
    <td className={`${styles.status} ${styles[file.status]}`}>{file.status}</td>
  </tr>
);

export default FileRow;
