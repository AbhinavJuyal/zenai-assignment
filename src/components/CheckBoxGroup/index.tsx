import styles from "./CheckBoxGroup.module.scss";

interface ICheckBoxGroup {
  options: { value: string; label: string | React.ReactNode }[];
}

const CheckBoxGroup = ({ options }: ICheckBoxGroup) => {
  return (
    <div className={styles.checkBoxGroup}>
      {options.map(({ value, label }, index) => {
        const uid = value + index;
        return (
          <div className={styles.option}>
            <input id={uid} type="checkbox" value={value} name={value} />
            <label htmlFor={uid}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxGroup;
