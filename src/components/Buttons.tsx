interface Props {
  onFetchData: any;
  onChangeLang: any;
  btn_value: string;
}

export default function Buttons(props: Props) {
  return (
    <div className="button_wrapper">
      <button onClick={props.onFetchData} className="trans_button">
        {props.btn_value}
      </button>
      <select onChange={props.onChangeLang} name="langs">
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}
