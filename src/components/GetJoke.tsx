import axios from "axios";
import { useEffect } from "react";

interface Props {
  joke: any;
  onSetJoke: any;
}

export default function GetJoke(props: Props) {
  const fetchdata: any = () => {
    async function getData() {
      const options = {
        method: "GET",
        url: "https://world-of-jokes1.p.rapidapi.com/v1/jokes/joke-of-the-day",
        headers: {
          "X-RapidAPI-Key":
            "1fb5b5863emsh91e568bfc1f09f7p1fe25ejsncaf7e33d8a97",
          "X-RapidAPI-Host": "world-of-jokes1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        props.onSetJoke(response.data.body);
      } catch (error) {
        console.error(error, "probably problems with API");
      }
    }
    getData();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <button onClick={fetchdata}> Generate Cat Fact </button>
      <p>{props.joke}</p>
    </>
  );
}
