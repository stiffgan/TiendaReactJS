export default function CommonButton(props) {
  return (
    <button className={`btn btn-` + props.typeButton} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
