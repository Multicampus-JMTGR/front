import axios from "axios";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((response) => response.data);
  // axios.get(url).then((response) => response.data);

export default fetcher;
