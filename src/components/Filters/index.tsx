import CheckBoxGroup from "../CheckBoxGroup";
import Panel from "../Panel/Panel";
import styles from "./Filters.module.scss";

const genCheckBoxGroupProps = (arr: string[]) =>
  arr.map((item) => ({ value: item, label: item }));

const Filters = () => {
  return (
    <form>
      <Panel title="BRAND">
        <CheckBoxGroup options={genCheckBoxGroupProps(["Mango", "H&M"])} />
      </Panel>
      <div className={styles.divider}></div>
      <Panel title="PRICE RANGE">
        <CheckBoxGroup
          options={genCheckBoxGroupProps(["Under 500", "1000 To 3000"])}
        />
      </Panel>
      <div className={styles.divider}></div>
      <Panel title="RATINGS">
        <CheckBoxGroup
          options={genCheckBoxGroupProps(["Under 500", "1000 To 3000"])}
        />
      </Panel>
    </form>
  );
};

export default Filters;
