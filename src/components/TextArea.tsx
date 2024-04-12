interface Props {
  onChange?: any;
  oniClick?: () => void;
  value: any;
}

export default function TextArea(props: Props) {
  return (
    <div className="input_wrapper">
      <textarea
        autoCorrect="on"
        required
        autoFocus
        placeholder="Введите текст"
        className="trans_input"
        onChange={props.onChange}
        value={props.value}
      ></textarea>
      <span className="clear_icon">
        <i onClick={props.oniClick} className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
}
