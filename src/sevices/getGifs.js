const apiKey = 'api_key=CEb1Yy95tjaSmnjZWbscD5rde6AfGgKD';

export default function getGifs({keyWord = 'naruto'} = {}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${keyWord}&limit=15&offset=0&rating=G&lang=en`
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      if(Array.isArray(data)){
        const gifs = data.map(image => image.images.downsized_medium.url)
        //setGifs(gifs)
        return gifs       
      }
    })
}