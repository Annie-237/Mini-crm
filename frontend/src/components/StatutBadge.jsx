function StatutBadge({ statut }) {
  const couleurs = {
    "Payée": "badge-success",
    "Impayée": "badge-danger",
    "En cours": "badge-warning",
    "Terminé": "badge-success",
    "En attente": "badge-warning",
  };

  const classe = couleurs[statut] || "badge-neutral";

  return <span className={`badge ${classe}`}>{statut}</span>;
}

export default StatutBadge;