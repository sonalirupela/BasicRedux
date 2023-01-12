import "./index.css";

export const Button = (props) => {
  const { isClick } = props;
  return (
    <div
      className={isClick ? "btn-wrapper btn-clicked" : "btn-wrapper"}
      onClick={props.onClick}
    >
      <span>{props.name}</span>
    </div>
  );
};
