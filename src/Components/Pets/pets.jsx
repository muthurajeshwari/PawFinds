import React, { useEffect, useState } from "react";
import "./pets.css";
import data from "../../pets.json";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    pet_type: "",
    breed: "",
    age: "",
    gender: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredPets = pets.filter((pet) => {
    return (
      (filters.pet_type === "" || pet.pet_type === filters.pet_type) &&
      (filters.breed === "" || pet.breed === filters.breed) &&
      (filters.age === "" || pet.age.toString() === filters.age) &&
      (filters.gender === "" || pet.gender === filters.gender)
    );
  });

  useEffect(() => {
    setPets(data);
  }, []);

  return (
    <div className="pets-container">
      <aside className="filters">
        <div className="filter-group">
          <h4>Pet Type</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="pet_type"
                value=""
                onChange={handleFilterChange}
              />{" "}
              Any
            </label>
            <label>
              <input
                type="radio"
                name="pet_type"
                value="Dog"
                onChange={handleFilterChange}
              />{" "}
              Dog
            </label>
            <label>
              <input
                type="radio"
                name="pet_type"
                value="Cat"
                onChange={handleFilterChange}
              />{" "}
              Cat
            </label>
            <label>
              <input
                type="radio"
                name="pet_type"
                value="Bird"
                onChange={handleFilterChange}
              />{" "}
              Bird
            </label>
          </div>
        </div>

        <div className="filter-group">
          <h4>Breed</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="breed"
                value=""
                onChange={handleFilterChange}
              />{" "}
              Any
            </label>
            <label>
              <input
                type="radio"
                name="breed"
                value="Labrador Retriever"
                onChange={handleFilterChange}
              />{" "}
              Labrador Retriever
            </label>
            <label>
              <input
                type="radio"
                name="breed"
                value="Beagle"
                onChange={handleFilterChange}
              />{" "}
              Beagle
            </label>
            <label>
              <input
                type="radio"
                name="breed"
                value="Pug"
                onChange={handleFilterChange}
              />{" "}
              Pug
            </label>{" "}
            <label>
              <input
                type="radio"
                name="breed"
                value="Poodle"
                onChange={handleFilterChange}
              />{" "}
              Poodle
            </label>{" "}
            <label>
              <input
                type="radio"
                name="breed"
                value="Golden Retriever"
                onChange={handleFilterChange}
              />{" "}
              Golden Retriever
            </label>{" "}
            <label>
              <input
                type="radio"
                name="breed"
                value="German Shepherd"
                onChange={handleFilterChange}
              />{" "}
              German Shepherd
            </label>
          </div>
        </div>

        <div className="filter-group">
          <h4>Gender</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleFilterChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleFilterChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value=""
                onChange={handleFilterChange}
              />{" "}
              Any
            </label>
          </div>
        </div>

        <div className="filter-group">
          <h4>Age</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="age"
                value=""
                onChange={handleFilterChange}
              />{" "}
              Any
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="2"
                onChange={handleFilterChange}
              />{" "}
              2
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="4"
                onChange={handleFilterChange}
              />{" "}
              4
            </label>
          </div>
        </div>
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
              <button className="btn">View</button>
              <button className="btn">Adopt</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
