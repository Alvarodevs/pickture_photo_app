import { ACCESS_KEY, URL_SEARCH, URL_RANDOM } from "../constants/api.js"

export const getImages = async (query, page) => {
    
    const numPage = page ? page : 1;

    if (query === "" || !query) {
        await fetch(`${URL_RANDOM}page=${numPage}&client_id=${ACCESS_KEY}&count=10`)
            .then(response => response.json())
            .then(data => {
                return data
            });
    } else {
        await fetch(`${URL_SEARCH}page=${numPage}&query=${query}&client_id=${ACCESS_KEY}&per_page=10`)
            .then(response => response.json())
            .then(data => {
                return data
            })

    }
};