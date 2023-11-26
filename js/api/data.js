const URL_GENERAL = 'https://30.javascript.pages.academy/kekstagram/';
const URL_FOR_GET = `${URL_GENERAL}data`;

const serverRequest = async (url, method, body) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
};

const getServerData = async () => serverRequest(URL_FOR_GET, 'GET');
const sendServerData = async (data) => serverRequest(URL_GENERAL, 'POST', data);

export {getServerData, sendServerData};