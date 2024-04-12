import axios from "axios";
import { useRef, useState } from "react";
import Buttons from "./Buttons";
import TextArea from "./TextArea";
import TextAreaWrapper from "./TextAreaWrapper";

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
  const handleDelete = () => {
    setTranslatedValue("");
    setPrevText("");
  };

  return (
    <>
      <p className="title">Инвенио Переводчик</p>
      <Buttons
        onChangeLang={handleLangChange}
        btn_value="Перевести"
        onFetchData={fetchData}
      />
      <TextAreaWrapper>
        <TextArea
          value={prevText}
          oniClick={handleDelete}
          onChange={(e: any) => {
            setPrevText(e.target.value);
          }}
        />
        <textarea
          value={translatedValue}
          ref={() => textareaRef}
          className="translated_value"
          disabled
          placeholder="Перевод"
        ></textarea>
      </TextAreaWrapper>
    </>
  );
}
