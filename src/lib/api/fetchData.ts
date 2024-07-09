import axios from 'axios';

// Interface to represent the API response structure (optional)
interface ApiResponse {
  // Define the properties expected in the response data based on your API
  // (e.g., body: any[], header: { description: string })
}

// Create a reusable `fetchData` function with type annotations
export const fetchData = async <T = ApiResponse>(url: string, setError: (error: string) => void): Promise<T | null> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (err) {
    let errorMessage = 'Error fetching data';

    if (axios.isAxiosError(err)) {
      if (err.response) {
        errorMessage += `: ${err.response.status} ${err.response.statusText}`;
        console.error('Error response data:', err.response.data);
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
      } else if (err.request) {
        errorMessage += ': No response received from server';
        console.error('Error request data:', err.request);
      } else {
        errorMessage += `: ${err.message}`;
      }
    } else {
      errorMessage += `: ${err.message}`;
    }

    setError(errorMessage);
    console.error(errorMessage, err);
    return null; // Indicate error by returning null
  }
};
