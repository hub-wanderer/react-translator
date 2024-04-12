import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import Buttons from "./Buttons";

export default function GetTranslation() {
  const [prevText, setPrevText] = useState("");
  const [translatedValue, setTranslatedValue] = useState("");
  const [lang, setLang] = useState("");

  const textareaRef = useRef("");

  const fetchData = async (e: any) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "api-version": "3.0",
        "to[0]": lang || "ru",
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

  const handleLangChange = (e: any) => {
    setLang(e.target.value);
  };

  return (
    <>
      <p className="title">Инвенио Переводчик</p>

      <form action="">
        <textarea
          className="trans_input"
          autoCorrect="on"
          required
          autoFocus
          placeholder="Введите текст"
          onChange={(e) => {
            setPrevText(e.target.value);
          }}
        />
        {/* <button className="trans_button" onClick={fetchData}>
          Перевести
        </button> */}
        <Buttons
          onChangeLang={handleLangChange}
          btn_value="Перевести"
          onFetchData={fetchData}
        />
      </form>
      <textarea
        value={translatedValue}
        ref={() => textareaRef}
        className="translated_value"
        disabled
        id="translated_field"
        placeholder="Перевод"
      ></textarea>
    </>
  );
}
