import React, { useState } from 'react';
import axios from 'axios';

const TradePersonList = ({ tradePersons }) => {
  const [selectedTradePerson, setSelectedTradePerson] = useState(null);

  const sendInvitation = async () => {
    try {
      const response = await axios.post('/api/send-invitation', {
        tradepersonId: selectedTradePerson._id // Assuming _id is the unique identifier of the tradeperson
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div>
      <h2>Trade Persons</h2>
      <ul>
        {tradePersons.map(tradePerson => (
          <li key={tradePerson._id}>
            {tradePerson.firstname} {tradePerson.lastname}
            <button onClick={() => setSelectedTradePerson(tradePerson)}>Send Invitation</button>
          </li>
        ))}
      </ul>
      {selectedTradePerson && (
        <div>
          <h3>Selected Trade Person</h3>
          <p>{selectedTradePerson.firstname} {selectedTradePerson.lastname}</p>
          <button onClick={sendInvitation}>Send Invitation</button>
        </div>
      )}
    </div>
  );
};

export default TradePersonList;
