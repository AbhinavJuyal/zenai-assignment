import CheckBoxGroup from "../CheckBoxGroup";
import Panel from "../Panel/Panel";
import styles from "./Filters.module.scss";
import ReactStars from "react-stars";
import { useResultCtx } from "../../context/ResultContext";
import { ChangeEventHandler } from "react";

const genCheckBoxGroupProps = (arr: string[], name: string) =>
  arr.map((item) => ({ value: item, label: item, name }));

const ratingCheckBoxGroupProp = new Array(5).fill(0).map((_, idx) => ({
  value: (5 - idx).toString(),
  name: "ratings",
  label: (
    <ReactStars
      count={5}
      value={5 - idx}
      edit={false}
      half={false}
      size={16}
      color2={"#ffd700"}
    />
  ),
}));

const Filters = () => {
  const resultCtx = useResultCtx();

  const handleFilterChange: ChangeEventHandler<HTMLFormElement> = (e) => {
    resultCtx?.wrapSetFilter(e.target);
  };

  return (
    <form className={styles.filterComp} onChange={handleFilterChange}>
      <Panel title="BRAND">
        <CheckBoxGroup
          options={genCheckBoxGroupProps(["Mango", "H&M"], "brand")}
        />
      </Panel>
      <div className={styles.divider}></div>
      <Panel title="PRICE RANGE">
        <CheckBoxGroup
          options={genCheckBoxGroupProps(
            ["Under 500", "1000 To 3000"],
            "range"
          )}
        />
      </Panel>
      <div className={styles.divider}></div>
      <Panel title="RATINGS">
        <CheckBoxGroup options={ratingCheckBoxGroupProp} />
      </Panel>
    </form>
  );
};

export default Filters;
