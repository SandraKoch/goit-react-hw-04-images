const API_KEY = '36788203-2c78e2a924ca1cc7e222b7ed9';
const PER_PAGE = 12;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (inputSearch, page) => {
  const params = new URLSearchParams({
    q: inputSearch,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  });
  try {
    const response = await fetch(`${BASE_URL}?${params}`);

    if (!response.ok) {
      throw new Error('Network response has failed');
    }

    const data = await response.json();
    // console.log(data.hits);
    return data;
  } catch (error) {
    console.log(error);
  }
};
