import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {
  const [person, setPerson] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people?page=1")
      .then((res) => setPerson(res.data.results))
      .catch((err) => console.log(err))
  }, []);

  const handleClick = (selected) => {
    if (selectedPerson === selected) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(selected);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <div className="container">
        {person && person.map((person) =>
          <div className="verimain" key={person.url}>
            <div className="veriler">
              <h2 className="veri">{person.name}</h2></div>
            <div className='button0'><button className="veriButton btn btn-dark btn-sm" onClick={() => handleClick(person)}> {person.birth_year}
            </button>
            </div>
            {selectedPerson === person && (
              <div className="veriDetails">
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair color: {person.hair_color}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
