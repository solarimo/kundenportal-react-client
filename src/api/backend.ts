import Axios from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:8080';

export default Axios.create({
  baseURL: BACKEND_BASE_URL
});