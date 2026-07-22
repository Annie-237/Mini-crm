import { useState } from "react";
import { createClient } from "../services/clientService";

function ClientForm({ onClientCreated }) {
  const [nom, setNom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [telephone, setTelephone] = useState("");
  const [entreprise, setEntreprise] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nouveauClient = {
      nom,
      courriel,
      telephone,
      entreprise,
      utilisateurId: 1, // temporaire, tant qu'on n'a pas l'authentification
    };

    const clientCree = await createClient(nouveauClient);
    onClientCreated(clientCree);

    // Réinitialiser le formulaire
    setNom("");
    setCourriel("");
    setTelephone("");
    setEntreprise("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un client</h2>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Courriel"
        value={courriel}
        onChange={(e) => setCourriel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Entreprise"
        value={entreprise}
        onChange={(e) => setEntreprise(e.target.value)}
      />
      <button type="submit">Créer le client</button>
    </form>
  );
}

export default ClientForm;