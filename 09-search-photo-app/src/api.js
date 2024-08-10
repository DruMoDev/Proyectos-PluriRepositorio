import axios from "axios";

const searchImages = async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 0ruJXULlVb86H6x5tP70LYEvpfPkSIow-2qvdvrfQps",
    },
    params: {
      query: term,
      per_page: 30,
    },
  });

  return response.data.results;
};

export default searchImages;
