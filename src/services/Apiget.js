const APIurl = (name) =>
  `https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime?q=${name}&limit=5`;

const clientid = "93a118e52db87b1238ceb8bde48686b7";

//const ApiFull = `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,opening_themes`;

export function Apiget(name) {
  //let asd1 = [];

  return fetch(APIurl(name), {
    method: "GET",
    headers: {
      "X-MAL-CLIENT-ID": clientid,
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const pictures = data.map((image) => image.node.main_picture.medium); //asd1 = pictures;
      return pictures;
    });
}
