const API_URL = process.env.REACT_APP_API_URL || "http://helloworld06.sit.kmutt.ac.th:3000/"; // Fallback URL

export const fetchRooms = async () => {
  const response = await fetch(`${API_URL}/api`); // ใช้ API_URL
  return response.json();
};
