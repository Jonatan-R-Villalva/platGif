import React, {useEffect , useState} from "react"
import Gif from "./Gif"
import getGifs from "../sevices/getGifs";

export default function ListOfGifs( {params} ){
    const {keyword} = params;

    //const [loading,setLoading] = useState(false);

    const [gifs , setGifs ] = useState(
        {loading: false , results: []});

    useEffect(() => {
        setGifs(
            actualGifs => ({ loading: false, results :actualGifs.results})
        )
        getGifs({ keyword }).then
        (gifs => 
        setGifs({ loading: false, results: gifs }));
    },[keyword])
    if(gifs.loading)return <h1>cargando...</h1>
    return <>
    {gifs.results.map(({id, title, url}) =>
    <Gif
        id={id}
        key={id}
        title={title}
        url={url} 
    />
    )}
    </>
    
}