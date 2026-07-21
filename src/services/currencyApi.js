const API_KEY = 'cur_live_debz12QvwmXUOJ5ghTcypASBU67zuRIMm7fcqNpw';
const BASE_URL = 'https://api.currencyapi.com/v3/latest';

export const fetchLatestRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch rates:", error);
    throw error;
  }
};
