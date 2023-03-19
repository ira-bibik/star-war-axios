import axios from "axios"

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

async function getPerson(num) {
    try {
        let response = {};
        api.get(`/people/${num}/`).then((res) => response = res)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

async function getPerson2(num) {
    try {
        let result = await api.get(`/people/${num}/`);
        return await result.data;
    } catch (error) {
        console.log(error)
    }
}

export { api , getPerson, getPerson2 };
