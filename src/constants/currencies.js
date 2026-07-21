//  This is used to fetch the correct flag from FlagCDN.

export const CURRENCY_TO_COUNTRY = {
  usd: "us",
  eur: "eu",
  gbp: "gb",
  inr: "in",
  aud: "au",
  cad: "ca",
  sgd: "sg",
  chf: "ch",
  myr: "my",
  jpy: "jp",
  cny: "cn",
  nzd: "nz",
  hkd: "hk",
  zar: "za",
  aed: "ae",
  sar: "sa",
  krw: "kr",
  sek: "se",
  nok: "no",
  mxn: "mx",
  brl: "br",
  rub: "ru",
  try: "tr",
  thb: "th",
  idr: "id",
  php: "ph",
  vnd: "vn",
  pln: "pl",
  dkk: "dk",
  huf: "hu",
  czk: "cz",
  ils: "il",
  clp: "cl",
  pkr: "pk",
  egp: "eg",
  bdt: "bd",
  ngn: "ng",
};

export const getFlagUrl = (currencyCode) => {
  const code = currencyCode.toLowerCase();
  const countryCode = CURRENCY_TO_COUNTRY[code];
  if (countryCode) {
    return `https://flagcdn.com/w40/${countryCode}.png`;
  }
  return null;
};
