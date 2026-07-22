import { useState, useEffect } from "react";
import { getClients } from "./services/clientService";
import { getProjets } from "./services/projetService";
import { getFactures } from "./services/factureService";
import ClientForm from "./components/ClientForm";
import ProjetForm from "./components/ProjetForm";
import FactureForm from "./components/FactureForm";

function App() {
  const [clients, setClients] = useState([]);
  const [projets, setProjets] = useState([]);
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    getClients().then(setClients);
    getProjets().then(setProjets);
    getFactures().then(setFactures);
  }, []);

  const handleClientCreated = (nouveauClient) => {
    setClients([...clients, nouveauClient]);
  };

  const handleProjetCreated = (nouveauProjet) => {
    setProjets([...projets, nouveauProjet]);
  };

  const handleFactureCreated = (nouvelleFacture) => {
    setFactures([...factures, nouvelleFacture]);
  };

  const getNomClient = (clientId) => {
    const client = clients.find((c) => c.id === clientId);
    return client ? client.nom : "Client inconnu";
  };

  const getTitreProjet = (projetId) => {
    const projet = projets.find((p) => p.id === projetId);
    return projet ? projet.titre : "Projet inconnu";
  };

  return (
    <div>
      <h1>Mini-CRM</h1>

      <section>
        <ClientForm onClientCreated={handleClientCreated} />
        <h2>Clients</h2>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              {client.nom} — {client.courriel}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <ProjetForm clients={clients} onProjetCreated={handleProjetCreated} />
        <h2>Projets</h2>
        <ul>
          {projets.map((projet) => (
            <li key={projet.id}>
              {projet.titre} — {getNomClient(projet.clientId)} — {projet.statut}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <FactureForm projets={projets} onFactureCreated={handleFactureCreated} />
        <h2>Factures</h2>
        <ul>
          {factures.map((facture) => (
            <li key={facture.id}>
              {getTitreProjet(facture.projetId)} — {facture.montant} $ — {facture.statut}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;