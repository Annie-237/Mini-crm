import { useState, useEffect } from "react";
import { getClients } from "./services/clientService";
import ClientForm from "./components/ClientForm";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  const handleClientCreated = (nouveauClient) => {
    setClients([...clients, nouveauClient]);
  };

  return (
    <div>
      <h1>Mini-CRM — Clients</h1>

      <ClientForm onClientCreated={handleClientCreated} />

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.nom} — {client.courriel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;