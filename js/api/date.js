const URL_FOR_GET = 'https://30.javascript.pages.academy/kekstagram/data';
const URL_FOR_POST = 'https://30.javascript.pages.academy/kekstagram';

const serverRequest = async (url, method, body) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
};

const getServerDate = async () => serverRequest(URL_FOR_GET, 'GET');
const postServerDate = async (postDate) => serverRequest(URL_FOR_POST, 'POST', postDate);

export {getServerDate, postServerDate};
