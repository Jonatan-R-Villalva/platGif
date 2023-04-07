import React, {useEffect , useState} from "react"
import Gif from "./Gif"
import getGifs from "../sevices/getGifs";

export default function ListOfGifs( {params} ){
    const {keyword} = params
    const [gifs , setGifs ] = useState([]);
    useEffect(() => {
        getGifs({ keyword })
        .then(gifs => setGifs(gifs));
    },[keyword])
    return <>
    {gifs.map(({id, title, url}) =>
    <Gif
        id={id}
        key={id}
        title={title}
        url={url} 
    />
    )}
    </>
    
}