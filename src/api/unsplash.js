import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID wW2Z9Sbkg0LDedWPTN_IEZHN_LEOHQyDPC03f0uL0fo"
      }
})