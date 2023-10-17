import axios from 'axios'

// API SW Helper
const api_base_uri = 'https://swapi.dev/api'


export function getResource(resource){
    return axios.get(`${api_base_uri}/${resource}`);
}

export function goToPage(resource, page){
    return axios.get(`${api_base_uri}/${resource}/?page=${page}`);
}

export function getItemDetails(resource, id){
    return axios.get(`${api_base_uri}/${resource}/${id}`);
}