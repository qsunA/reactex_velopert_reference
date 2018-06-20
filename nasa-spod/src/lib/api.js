import axios from 'axios';

export function getAPOD(date=''){
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=eY3oBSllmLu12buHPw24nlt9iRNz4dZIjiFMiFGF&date=${date}`);
}