import axios from 'axios';

const API_URL = 'https://mwks-joke-service.azurewebsites.net/api/joke/random';

export const getRandomJoke = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
