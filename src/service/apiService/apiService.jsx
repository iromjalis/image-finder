import axios from "axios";

const fetchImages = ({ currentPage = 1, pageSize = 5, query = "cat" }) => {
  const ApiKey = "21072245-3acfda09a1d5bc65070e6b336";
  const URL = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`;

  const fetchImages = ({ currentPage = 1, pageSize = 5, query = "cat" }) => {
    return axios.get(URL).then(({ data }) => data.hits);
  };
};

export default { fetchImages };
