import axios from "axios"
import { useEffect, useState } from "react"

//SE ENCARGA DE HACER LAS PETICIONES A LAS LOCACIONES
//COMO PARAMETRO RECIBE EL ID ALEATORIO.
const useFetchLocation = () => {
    const URL = 'https://rickandmortyapi.com/api/location/';

    const idDefault = Math.floor(Math.random() * 126) + 1;

    const [id, setId] = useState(idDefault);

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    useEffect(() => {
        setState({
            data: null,
            isLoading: true,
            hasError: null
        })

        axios.get(URL + id)
            .then(({ data }) => {
                //ELIMINAR SETTIMEOUT DE SER NECESARIO.
                //SU USO ES PLENAMENTE PARA DARLE UN RETARDO AL LOADING
                setTimeout(() => {
                    setState({
                        data,
                        isLoading: false,
                        hasError: null
                    })
                }, 1000);
            })
            .catch((err) => {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: response.status
                })
            })
    }, [id]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        setId
    };


}

export default useFetchLocation;