import { useState } from "react";
import { createFacture } from "../services/factureService";

function FactureForm({ projets, onFactureCreated }) {
  const [montant, setMontant] = useState("");
  const [statut, setStatut] = useState("Impayée");
  const [projetId, setProjetId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nouvelleFacture = {
      montant: parseFloat(montant),
      statut,
      projetId: parseInt(projetId),
    };

    const factureCreee = await createFacture(nouvelleFacture);
    onFactureCreated(factureCreee);

    setMontant("");
    setStatut("Impayée");
    setProjetId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une facture</h2>

      <select value={projetId} onChange={(e) => setProjetId(e.target.value)} required>
        <option value="">-- Choisir un projet --</option>
        {projets.map((projet) => (
          <option key={projet.id} value={projet.id}>
            {projet.titre}
          </option>
        ))}
      </select>

      <input
        type="number"
        step="0.01"
        placeholder="Montant"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        required
      />

      <select value={statut} onChange={(e) => setStatut(e.target.value)}>
        <option value="Impayée">Impayée</option>
        <option value="Payée">Payée</option>
      </select>

      <button type="submit">Créer la facture</button>
    </form>
  );
}

export default FactureForm;