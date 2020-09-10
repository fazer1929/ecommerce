import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:5001/e-commerce-39de8/us-central1/api'  //The Cloud Function
});

export default instance;