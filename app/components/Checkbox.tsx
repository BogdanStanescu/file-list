import styles from "../page.module.css";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  indeterminate?: boolean;
};

const Checkbox = ({
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
}: CheckboxProps) => (
  <label className={styles.checkbox}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      ref={(el) => {
        if (el) el.indeterminate = indeterminate;
      }}
    />
  </label>
);

export default Checkbox;
