import Checkbox from "./Checkbox";
import styles from "../page.module.css";

type HeaderProps = {
  isAllSelected: boolean;
  isSomeSelected: boolean;
  selectedCount: number;
  onToggleSelectAll: () => void;
  onDownloadSelected: () => void;
};

const Header = ({ ...props }: HeaderProps) => (
  <header className={styles.header}>
    <Checkbox
      indeterminate={props.isSomeSelected}
      checked={props.isAllSelected}
      onChange={props.onToggleSelectAll}
    />
    <span className={styles.selectedCount}>
      {props.selectedCount > 0
        ? `Selected ${props.selectedCount}`
        : "None selected"}
    </span>

    <button
      className={styles.downloadButton}
      disabled={props.selectedCount === 0}
      onClick={props.onDownloadSelected}
    >
      Download
    </button>
  </header>
);

export default Header;
