import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

// export const fetchHotels = async () => {
//     try {
//         const response = await api.get("/hotels");
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching hotels:", error);
//         throw error;
//     }
// };

// export const fetchHotel = async (id) => {
//     try {
//         const response = await api.get(`/hotels/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching hotel:", error);
//         throw error;
//     }
// }

// export const fetchRooms = async () => {
//     try {
//         const response = await api.get("/rooms");
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching rooms:", error);
//         throw error;
//     }
// }

// export const fetchRoom = async (id) => {
//     try {
//         const response = await api.get(`/rooms/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching room:", error);
//         throw error;
//     }
// }

// export const fetchReservations = async () => {
//     try {
//         const response = await api.get("/reservations");
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching reservations:", error);
//         throw error;
//     }
// }   

// export const fetchReservation = async (id) => {
//     try {
//         const response = await api.get(`/reservations/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching reservation:", error);
//         throw error;
//     }
// }

// export const fetchUser = async (data) => {
//     try {
//         const response = await api.post("/users/login", data);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         throw error;
//     }
// }
