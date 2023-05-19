import axios from "axios";

const apiAnime = axios.create({ //Mudar nome api tanto aqui, quando na est. paginas
    baseURL: "https://api.jikan.moe/v4/",
})

export default apiAnime //Mudar aqui