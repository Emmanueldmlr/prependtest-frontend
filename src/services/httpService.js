import axios from "axios";

class HttpService {

  constructor () {

    this.baseUrl = process.env.REACT_APP_BASE_API_URL;

  }

  getData = async (url) => {

    return axios.get(this.baseUrl + url)

  };

}

export default HttpService;