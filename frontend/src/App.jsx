import { useState, useEffect } from "react";
import { getClients } from "./services/clientService";
import { getProjets } from "./services/projetService";
import { getFactures } from "./services/factureService";
import ClientForm from "./components/ClientForm";
import ProjetForm from "./components/ProjetForm";
import FactureForm from "./components/FactureForm";
import "./App.css";
import StatutBadge from "./components/StatutBadge";

function App() {
  const [clients, setClients] = useState([]);
  const [projets, setProjets] = useState([]);
  const [factures, setFactures] = useState([]);
  const [activeTab, setActiveTab] = useState("clients");

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
    <div className="app">
      <aside className="sidebar">
        <h1>Mini-CRM</h1>
        <button
          className={`nav-item ${activeTab === "clients" ? "active" : ""}`}
          onClick={() => setActiveTab("clients")}
        >
          Clients
        </button>
        <button
          className={`nav-item ${activeTab === "projets" ? "active" : ""}`}
          onClick={() => setActiveTab("projets")}
        >
          Projets
        </button>
        <button
          className={`nav-item ${activeTab === "factures" ? "active" : ""}`}
          onClick={() => setActiveTab("factures")}
        >
          Factures
        </button>
      </aside>

      <main className="content">
        {activeTab === "clients" && (
          <>
            <h2>Clients</h2>
            <ClientForm onClientCreated={handleClientCreated} />
            <ul>
              {clients.map((client) => (
                <li key={client.id}>
                  {client.nom} — {client.courriel}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "projets" && (
          <>
            <h2>Projets</h2>
            <ProjetForm clients={clients} onProjetCreated={handleProjetCreated} />
            <ul>
  {projets.map((projet) => (
    <li key={projet.id}>
      {projet.titre} — {getNomClient(projet.clientId)} — <StatutBadge statut={projet.statut} />
    </li>
  ))}
            </ul>
          </>
        )}

        {activeTab === "factures" && (
          <>
            <h2>Factures</h2>
            <FactureForm projets={projets} onFactureCreated={handleFactureCreated} />
            <ul>
  {factures.map((facture) => (
    <li key={facture.id}>
      {getTitreProjet(facture.projetId)} — {facture.montant} $ — <StatutBadge statut={facture.statut} />
    </li>
  ))}
</ul>
          </>
        )}
      </main>
    </div>
  );
}

export default App;