import axios from "axios";

axios.defaults.baseURL = "https://fitness-api-0f45fd642eff.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
