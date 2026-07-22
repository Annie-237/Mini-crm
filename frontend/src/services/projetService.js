import api from "./api";

export const getProjets = async () => {
  const response = await api.get("/projets");
  return response.data;
};

export const createProjet = async (projet) => {
  const response = await api.post("/projets", projet);
  return response.data;
};