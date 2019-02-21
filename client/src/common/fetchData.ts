import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/';

export const fetchData = async (url: string) => {
    if (url) {
        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                return {data: response.data};
            }
            else
            {
                return {data: null};
            }
        } catch (error) {
            console.log(`api error is ${error}`);
            return {data: null};
        }
    }
    else
    {
        console.log(`API url not received`);
        return {data: null};
    }
}