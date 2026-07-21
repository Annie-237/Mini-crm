import api from "./api";

export const getClients = async () => {
  const response = await api.get("/clients");
  return response.data;
};

export const createClient = async (client) => {
  const response = await api.post("/clients", client);
  return response.data;
};