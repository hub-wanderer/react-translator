import axios from "axios";
import { useState } from "react";

export default function GetTranslation() {
  const [prevText, setPrevText] = useState("");
  const [translatedValue, setTranslatedValue] = useState("");

  const fetchData = async () => {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "api-version": "3.0",
        "to[0]": "ru",
        textType: "plain",
        profanityAction: "NoAction",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1fb5b5863emsh91e568bfc1f09f7p1fe25ejsncaf7e33d8a97",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [
        {
          Text: prevText,
        },
      ],
    };

    try {
      const response = await axios.request(options);
      setTranslatedValue(response.data[0].translations[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p>Инвенио Переводчик</p>

      <input
        type="text"
        placeholder="Введите текст"
        onChange={(e) => {
          setPrevText(e.target.value);
        }}
      />
      <button className="trans_button" onClick={fetchData}>
        Translate
      </button>
      <p>{translatedValue}</p>
    </>
  );
}
