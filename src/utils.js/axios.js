import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://qesv86hvwg.execute-api.eu-west-2.amazonaws.com/dev",
});

export default customFetch;
