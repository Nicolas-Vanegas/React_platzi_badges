import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeList.css";
import BadgeListItem from "../components/BadgeListItem";

function useSearchBadges(badges) {
  //el query comienza en vacio
  const [query, setQuery] = React.useState("");

  //Pasamos como estado y el valor inicial será la lista de los badges para recorrerlos con el filterBadge
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  //Esto para filtrar con el search la lista completa de los badges. useMemo le damos una function con argumentos, y una lista [] los cuales siempre que sean iguales, la contestación te la regresa inmediato
  React.useMemo(() => {
    const result = badges.filter(badge => {
      //si el badge incluye el query será true y el badge q uedará en la lista de filterBadges. con ${badge.firstName}${badge.lastName} junta el nombre y el apellido y si eso incluye las letras ingresadas en el valor del input, se devuelve solo los badge con esas letras
      return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

//Queremos ponerle Hook a la lista para poner un search, tiene que ser una function
function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  //Acá haremos el caso de que aún no hallan creado ningún badge, así que la petición solo va a regresar un arreglo vacio
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          {/* Input controlado, cada vez que se escriba guardar el valor para luego utilizarlo pasándoselo a través del value */}
          <input
            type="text"
            className="form-control"
            value={query}
            //Cada vez que se ingresa una letra se guarda en query
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
        </Link>
      </div>
    );
  }
  //Creo esta constante para darle la vuelta a la lista d badges y que se muestren de hacia arriba para abajo a medida que se crean
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        {/* Input controlado, cada vez que se escriba guardar el valor para luego utilizarlo pasándoselo a través del value */}
        <input
          type="text"
          className="form-control"
          value={query}
          //Cada vez que se ingresa una letra se guarda en query
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            /* Cada hijo en una lista tiene que tener un hijo único llamado key, esto ayuda a React para poder determinar cuando el elemento se vuelve a renderizar si se mantuvo en la lista o si cambió (Le asignamos id de key porque tiene que ser único)*/
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgeListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
