import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pets.css";
import axios from "axios";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    pet_type: [],
    breed: [],
    age: [],
    gender: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState({
    pet_type: false,
    breed: false,
    age: false,
    gender: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/pets")
      .then((res) => {
        setTimeout(() => {
          setPets(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to fetch Pets data:", error);
        setLoading(false);
      });
  }, []);

  const [selectedPet, setSelectedPet] = useState(null);

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prevFilters, [category]: newValues };
    });
  };

  const filteredPets = pets.filter((pet) => {
    const matches = (key, value) => {
      return filters[key].length === 0 || filters[key].includes(String(value));
    };

    return (
      matches("pet_type", pet.pet_type) &&
      matches("breed", pet.breed) &&
      matches("age", pet.age) &&
      matches("gender", pet.gender)
    );
  });

  const allBreeds = Array.from(new Set(pets.map((p) => p.breed))).sort();
  const allTypes = Array.from(new Set(pets.map((p) => p.pet_type)));
  const allAges = Array.from(new Set(pets.map((p) => p.age))).sort(
    (a, b) => a - b
  );
  const allGenders = Array.from(new Set(pets.map((p) => p.gender)));

  const renderCheckboxList = (category, options) => (
    <div className="filter-group">
      <div className="dropdown-header" onClick={() => toggleDropdown(category)}>
        <h4>{category.replace("_", " ").toUpperCase()}</h4> ⮟
      </div>
      {dropdownOpen[category] && (
        <div className="checkbox-list">
          {options.map((opt) => (
            <label key={opt} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters[category].includes(String(opt))}
                onChange={() => handleCheckboxChange(category, String(opt))}
              />
              {String(opt)}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const navigate = useNavigate();

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <img
          src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif"
          alt="Loading..."
          height="100px"
          width="100px"
        />
        <p>Loading pets data...</p>
      </div>
    );
  }

  return (
    <div className="pets-container">
      <aside className="filters">
        {renderCheckboxList("pet_type", allTypes)}
        {renderCheckboxList("breed", allBreeds)}
        {renderCheckboxList("age", allAges)}
        {renderCheckboxList("gender", allGenders)}
      </aside>

      <div className="pet-list">
        {filteredPets.map((pet) => (
          <div key={pet.pet_name} className="pet-card">
            <img src={pet.image} alt={pet.pet_name} />
            <h5>{pet.pet_name}</h5>
            <p>{pet.breed}</p>
            <p>
              {pet.age} years old • {pet.gender}
            </p>
            <p>{pet.location}</p>
            <div className="buttons">
              <button className="btn" onClick={() => setSelectedPet(pet)}>
                {" "}
                View{" "}
              </button>
              <button
                className="btn"
                onClick={() => navigate("/adoption", { state: { pet } })}
              >
                Adopt
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="pet-details">
          <div className="content">
            <button className="close" onClick={() => setSelectedPet(null)}>
              &times;
            </button>
            <img
              src={selectedPet.image}
              alt={selectedPet.pet_name}
              className="petimg"
            />
            <h2>{selectedPet.pet_name}</h2>

            <div className="details-wrapper">
              <table className="details-table">
                <tbody>
                  <tr>
                    <th>Type</th>
                    <td>{selectedPet.pet_type}</td>
                  </tr>
                  <tr>
                    <th>Breed</th>
                    <td>{selectedPet.breed}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{selectedPet.age} years</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{selectedPet.gender}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{selectedPet.status}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>{selectedPet.city}</td>
                  </tr>
                  <tr>
                    <th>Vaccination Status</th>
                    <td>
                      {selectedPet.vaccinated
                        ? "Vaccinated"
                        : "Not yet vaccinated"}
                    </td>
                  </tr>
                  <tr>
                    <th>Vaccinated On</th>
                    <td>
                      {new Date(selectedPet.vaccinationDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="details-table">
                <tbody>
                  <tr>
                    <th>Allergies</th>
                    <td>{selectedPet.allergies}</td>
                  </tr>
                  <tr>
                    <th>Last Vet Visit</th>
                    <td>
                      {new Date(
                        selectedPet.lastVetVisitDate
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th>Health Remarks</th>
                    <td>{selectedPet.healthRemarks}</td>
                  </tr>
                  <tr>
                    <th>About Me</th>
                    <td>{selectedPet.description}</td>
                  </tr>
                  <tr>
                    <th>Owner's Name</th>
                    <td>{selectedPet.Owner_name}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td>{selectedPet.Phone_Number}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pets;
