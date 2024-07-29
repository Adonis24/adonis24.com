import { MenuItem, TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.scss";

export default function SingularSelect({
  data,
  handleChange,
  placeholder,
  header,
  disabled,
  ...rest
  
}) {
  const [field, meta] = useField(rest);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {header && (
        <div
          className={`${styles.header} ${
            meta.error ? styles.header__error : ""
          }`}
        >
          <div className={styles.flex}>
            {meta.error && (
              <img src="../../../images/warning.png" alt="warning" />
            )}
            {header}
          </div>
        </div>
      )}
      {/* <TextField
        variant="outlined"
        name={field.name}
        select
        label={placeholder}
        disabled={disabled}
        value={field.value}
        onChange={handleChange}
        className={`${styles.select} ${
          meta.touched && meta.error && styles.error__select
        }`}
      >
        <MenuItem key={""} value={""}>
          No Selected / Or Empty
        </MenuItem>
        {data?.map((option) => (
          <MenuItem key={option.id} value={option.id || option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField> */}
      <select
        className={`${styles.select} ${
          meta.touched && meta.error && styles.error__select
        } tw-w-full tw-h-10`} 
        name={field.name}
        value={field.value.name}
        onChange={handleChange}
      >
        {data?.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <p className={styles.error__msg}>
          <ErrorMessage name={field.name} />
        </p>
      )}
    </div>
  );
}
