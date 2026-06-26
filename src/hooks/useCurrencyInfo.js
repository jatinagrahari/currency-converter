import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_debz12QvwmXUOJ5ghTcypASBU67zuRIMm7fcqNpw`,
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        // console.log(data);
      });
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
