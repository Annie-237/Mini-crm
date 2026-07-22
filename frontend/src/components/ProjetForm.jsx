import { useState } from "react";
import { createProjet } from "../services/projetService";

function ProjetForm({ clients, onProjetCreated }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("En cours");
  const [clientId, setClientId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nouveauProjet = {
      titre,
      description,
      statut,
      clientId: parseInt(clientId),
    };

    const projetCree = await createProjet(nouveauProjet);
    onProjetCreated(projetCree);

    setTitre("");
    setDescription("");
    setStatut("En cours");
    setClientId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un projet</h2>

      <select value={clientId} onChange={(e) => setClientId(e.target.value)} required>
        <option value="">-- Choisir un client --</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.nom}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Titre du projet"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={statut} onChange={(e) => setStatut(e.target.value)}>
        <option value="En cours">En cours</option>
        <option value="Terminé">Terminé</option>
        <option value="En attente">En attente</option>
      </select>

      <button type="submit">Créer le projet</button>
    </form>
  );
}

export default ProjetForm;