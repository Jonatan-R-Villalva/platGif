import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import getGifs from "../../sevices/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

export default function Home(){
    const [keyword , setKeyword] = useState('');
    const [path , pushLocation] = useLocation();
    const handleSubmit = e =>{
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = e =>{
        setKeyword(e.target.value)
    }

    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getGifs({keyword:"goku"})
            .then(gifs =>{
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword])

    return(
    <>
        <h3>Los gifs mas populares</h3>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."/>
            <input type="submit" value='Buscar'/>
        </form>
        <br/><br/>
        <h3 className="App-title">Ultima busqueda</h3>
        <ListOfGifs gifs={gifs} />
        <h3 className="App-title">Gifs mas populares</h3>
        <ul>
        {POPULAR_GIFS.map((e)=>(
            <li key={e}>
                <Link to={`/search/${e}`}>
                    {e}
                </Link>
            </li>
        ))}
        </ul>
    </>
    )
}
