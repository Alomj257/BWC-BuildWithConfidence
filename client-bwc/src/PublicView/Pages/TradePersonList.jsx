import React, { useState, useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5500/api'
});

const TradePersonList = () => {
  const [tradePersons, setTradePersons] = useState([]);
  const [selectedTradePerson, setSelectedTradePerson] = useState(null);

  useEffect(() => {
    const fetchTradePersons = async () => {
      try {
        const response = await axiosInstance.get('/auth/users/tradeperson');
        setTradePersons(response.data);
      } catch (error) {
        console.error('Error fetching tradepersons:', error);
      }
    };

    fetchTradePersons();
  }, []);

  const sendInvitation = async () => {
    if (!selectedTradePerson) return;
    try {
      const response = await axiosInstance.post('/auth/sent-invitation', {
        tradepersonId: selectedTradePerson._id
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending invitation:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Trade Persons</h2>
      <ul>
        {tradePersons.map(tradePerson => (
          <li key={tradePerson._id}>
            <div>
              <p><strong>Name:</strong> {tradePerson.firstname} {tradePerson.lastname}</p>
              <p><strong>Email:</strong> {tradePerson.email}</p>
              <p><strong>Gender:</strong> {tradePerson.gender}</p>
              <p><strong>Phone:</strong> {tradePerson.phone}</p>
              <p><strong>Address:</strong> {tradePerson.address}</p>
            </div>
            <button onClick={() => setSelectedTradePerson(tradePerson)}>Send Invitation</button>
          </li>
        ))}
      </ul>
      {selectedTradePerson && (
        <div>
          <h3>Selected Trade Person</h3>
          <p><strong>Name:</strong> {selectedTradePerson.firstname} {selectedTradePerson.lastname}</p>
          <button onClick={sendInvitation}>Send Invitation</button>
        </div>
      )}
    </div>
  );
};

export default TradePersonList;
