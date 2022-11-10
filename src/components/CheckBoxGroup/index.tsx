import styles from "./CheckBoxGroup.module.scss";

interface ICheckBoxGroup {
  options: {
    value: string;
    label: string | React.ReactNode | JSX.Element;
    name?: string;
  }[];
}

const CheckBoxGroup = ({ options }: ICheckBoxGroup) => {
  return (
    <div className={styles.checkBoxGroup}>
      {options.map(({ value, label, name = "" }, index) => {
        const uid = value + index;
        return (
          <div key={uid} className={styles.option}>
            <input
              id={uid}
              type="checkbox"
              value={value}
              name={name === "" ? value : name}
            />
            <label htmlFor={uid}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxGroup;
