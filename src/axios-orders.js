import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-3ae1e.firebaseio.com/"
});

export default instance;
