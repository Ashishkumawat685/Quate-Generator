const api_url = "https://quotes-api-self.vercel.app/quote";

async function getquate() {
  const blockquoteid = document.getElementById("blockquote");
  const autorid = document.getElementById("autor");
  const blockquotehi = document.getElementById("blockquotehi");

  const response = await fetch(api_url);
  var data = await response.json();

  blockquoteid.innerHTML = data.quote;
  autorid.innerHTML = data.author;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    data.quote
  )}&langpair=en|hi`;

  const response1 = await fetch(url);
  const data1 = await response1.json();
  blockquotehi.innerHTML = data1.responseData.translatedText;
}
getquate();
