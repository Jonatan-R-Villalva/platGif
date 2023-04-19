import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/UseGifs';

export default function SearchResults({params}){
    const { keyword } = params;
    const { loading, gifs} = useGifs({keyword})
    

    return <>
    {
        loading
        ? <Spinner/>
        : <ListOfGifs gifs={gifs} />
    }
    </>
}