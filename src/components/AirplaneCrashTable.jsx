import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // Import the Papa Parse library to parse the CSV file

function AirplaneCrashTable() {
  const [data, setData] = useState([]); // Initialize the state for the data

  // Use the useEffect hook to parse the CSV file and update the state
  useEffect(() => {
    Papa.parse("app/public/airplane_crash.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Flight #</th>
          <th>Date</th>
          <th>Route</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {data.map((crash) => (
          <tr key={crash.id}>
            <td>{crash.operator}</td>
            <td>{crash.flight_number}</td>
            <td>{crash.date}</td>
            <td>{crash.route}</td>
            <td>...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AirplaneCrashTable;
