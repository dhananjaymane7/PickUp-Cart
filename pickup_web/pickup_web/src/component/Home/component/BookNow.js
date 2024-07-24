import React, { useState, useRef, useEffect } from "react";
import "./BookNow.css";
import axios from "axios";

const BookNow = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    pname: "",
    pnumber: "",
    paddress: "",
    ppin: "",
    dpin: "",
    packageType: "",
    orderDate: new Date().toISOString().slice(0, 10), // Included packageType in formData
  });
  const [showSpinner, setShowSpinner] = useState(false); // New state for spinner

  const options = ["Document", "Parcel", "Cargo"]; // List of options

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      } 
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setFormData({
      ...formData,
      packageType: option,
    });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      setShowSpinner(true);
      console.log("Form data:", formData);
      console.log("Selected option:", selectedOption);

      const response = await axios.post("http://localhost:7000/quickOrder/new_QuickOrder", formData);
      setShowSpinner(false);
      window.alert("order create successfull")

      console.log("Server response:", response.data);

  
      setFormData({
        pname: "",
        pnumber: "",
        paddress: "",
        ppin: "",
        dpin: "",
        packageType: "", 
        orderDate: new Date().toISOString().slice(0, 10),
      });
      setSelectedOption(null);
      setIsOpen(false);
      alert("Form submitted successfully! Order ID: " + response.data.orderId);
    } catch (error) {
      console.error("Error submitting form:", error);
       alert("Error");
    }
    finally {
      setShowSpinner(false);
  }
  };

  return (
    <div className="container">
      <div className="bg-white w-full">
        <img src="./pick.png" alt="" className="w-52 py-1 pl-6" />
      </div>

      <div className="main-content">
        <div className="left-side">
          <h1>
            Book your<br />
            <span>orders quickly</span>
          </h1>
          <p>
            Just Enter your Name, Mobile Number, Pickup Pincode, Delivery
            Pincode and it’s done.
          </p>
          <img src="./bg.png" alt="" id="second-image" />
        </div>
        <div className="right-side">
          <h2>
            Add <label>Address</label>
          </h2>
          <div className="mb-4">
            <input
              required
              name="pname"
              value={formData.pname}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
              type="text"
              placeholder="Pickup Contact Name"
            />
            <input
              required
              name="pnumber"
              value={formData.pnumber}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
              type="text"
              placeholder="Pickup Mobile"
            />
            <input
              required
              name="paddress"
              value={formData.paddress}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
              type="text"
              placeholder="Pickup Address"
            />
            <input
              required
              name="ppin"
              value={formData.ppin}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
              type="text"
              placeholder="Pickup Pincode"
            />
            <input
              required
              name="dpin"
              value={formData.dpin}
              onChange={handleChange}
              className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
              type="text"
              placeholder="Delivery Pincode"
            />
          </div>

          <div className="package-details">
            <h3>
              Add <label>Package</label> Details
            </h3>
            <div className="dropdown" ref={dropdownRef}>
              <div className="dropdown-input">
                <input
                  type="text"
                  value={selectedOption || ""}
                  placeholder="Package Type"
                  readOnly
                  onClick={toggleDropdown}
                />
                <div className="dropdown-icon" onClick={toggleDropdown}>
                  <i className="fas fa-chevron-down"></i>
                  {/* Font Awesome icon */}
                </div>
              </div>
              {isOpen && (
                <ul className="dropdown-menu">
                  {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionClick(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
