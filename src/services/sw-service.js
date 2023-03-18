import axios from "axios"

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

async function getPerson(num) {
    try {
        const result = await api.get(`/people/${num}/`);
        return result;
    } catch (error) {
        console.log(error)
    }
    
}


export { api , getPerson };
