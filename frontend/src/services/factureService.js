import api from "./api";

export const getFactures = async () => {
  const response = await api.get("/factures");
  return response.data;
};

export const createFacture = async (facture) => {
  const response = await api.post("/factures", facture);
  return response.data;
};