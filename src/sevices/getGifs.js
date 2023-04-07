const apiKey = 'api_key=CEb1Yy95tjaSmnjZWbscD5rde6AfGgKD';

export default function getGifs({keyword } = {}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${keyword}&limit=15&offset=0&rating=G&lang=en`
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      if(Array.isArray(data)){
          
        const gifs = data.map(image => {
            const {images, title, id} = image; 
            const {url} = image.images.downsized_medium;
            return {title, id, url};
        })
        return gifs     
      }
    })
}