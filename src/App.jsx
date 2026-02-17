import { useEffect, useState } from "react";

// COMPONENTE CARD
function CastCard({ person }) {
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img src={person.image} className="card-img-top" alt={person.name} />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{person.name}</h5>

          <p className="card-text mb-1">
            <strong>Anno:</strong> {person.birth_year}
          </p>

          <p className="card-text mb-1">
            <strong>Nazionalità:</strong> {person.nationality}
          </p>

          <p className="card-text small flex-grow-1">{person.biography}</p>

          <p className="card-text">
            <strong>Riconoscimenti:</strong> {person.awards}
          </p>
        </div>
      </div>
    </div>
  );
}

// APP PRINCIPALE
export default function App() {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dati API:", data);
        setCast(data);
      })
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🎬 Cast Fetching</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cast.map((person) => (
          <CastCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
