import React, { useState } from "react";
import "./adoption.css";
import { useLocation } from "react-router-dom";

const Adoption = () => {
  const location = useLocation();
  const pet = location.state?.pet;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 4) {
      newErrors.name = "Name must be at least 4 letters";
    } else if (formData.name.length > 15) {
      newErrors.name = "Name must be at most 15 letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phonenumber)) {
      newErrors.phonenumber =
        "Phone number must start with 6/7/8/9 and be 10 digits";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  React.useEffect(() => {
    setIsFormValid(validate());
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phonenumber: true,
      address: true,
      dob: true,
    });

    if (!validate()) return;

    const adoptionData = {
      petId: pet?.id,
      petName: pet?.pet_name,
      breed: pet?.breed,
      userName: formData.name,
      email: formData.email,
      phone: formData.phonenumber,
      address: formData.address,
      dob: formData.dob,
    };

    try {
      const response = await fetch("http://localhost:5000/adoptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptionData),
      });

      if (response.ok) {
        alert("Adoption submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          address: "",
          dob: "",
        });
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting Form:", error);
    }
  };

  return (
    <div className="adoption-details">
      <form className="adoption-form" onSubmit={handleSubmit} noValidate>
        <h2>Pet Adoption Form</h2>
        <div className="form-columns">
          <div className="pet-detail">
            <img src={pet?.image} alt="" className="form-img" />
            <label>
              Pet ID
              <input type="text" value={pet?.id} readOnly />
            </label>
            <label>
              Pet Name
              <input type="text" value={pet?.pet_name} readOnly />
            </label>
            <label>
              Pet Breed
              <input type="text" value={pet?.breed} readOnly />
            </label>
          </div>

          <div className="user-detail">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.name && errors.name && (
                <span className="error">{errors.name}</span>
              )}
            </label>
            <label htmlFor="email">
              Mail ID
              <input
                type="email"
                name="email"
                placeholder="Enter your mail"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.email && errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </label>
            <label htmlFor="phonenumber">
              Phone Number
              <input
                type="number"
                name="phonenumber"
                placeholder="Enter your Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.phonenumber && errors.phonenumber && (
                <span className="error">{errors.phonenumber}</span>
              )}
            </label>
            <label htmlFor="address">
              Address
              <input
                type="text"
                name="address"
                placeholder="Enter your Address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.address && errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </label>
            <label htmlFor="dob">
              Date Of Birth
              <input
                type="date"
                name="dob"
                placeholder="Enter your Date Of Birth"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.dob && errors.dob && (
                <span className="error">{errors.dob}</span>
              )}
            </label>
            <button type="submit" className="form-btn" disabled={!isFormValid}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adoption;
