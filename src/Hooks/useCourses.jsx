// Import necessary modules
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // Import Axios

// Define the useCourses custom hook
const useCourses = () => {
  const { data: courses = [], isLoading: loading, refetch } = useQuery(
    ["courses"],
    async () => {
      try {
        // Make an API request using Axios directly
        const res = await axios.get(
          "https://summer-camp-server-seven-pink.vercel.app/courses"
        );
        // Parse the JSON response
        const jsonData = res.data;
        return jsonData;
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error fetching courses:", error);
        throw error; // Rethrow the error so React Query can handle it
      }
    }
  );

  // Return the courses data, loading state, and refetch function
  return { courses, loading, refetch };
};
export default useCourses;
