import { useState, useEffect } from "react";
import { getClients } from "./services/clientService";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  return (
    <div>
      <h1>Mini-CRM — Clients</h1>
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