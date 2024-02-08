const API_BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchRandomCat = async () => {
  const response = await fetch(`${API_BASE_URL}/images/search?has_breeds=1`);
  const data = await response.json();
  return data[0];
};

export const fetchCatDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/images/${id}`);
  const data = await response.json();
  return data;
};
