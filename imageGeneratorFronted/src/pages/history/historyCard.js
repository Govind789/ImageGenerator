import { useEffect, useState } from "react";
import NavBar from "../common/navBar/navBar.js";
import "./history.css";

const HistoryCard = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("authorization");
        console.log("Token:", token);  

        const res = await fetch(`/api/v1/history`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
          setHistory(data.data);
        }else {
          console.error("Failed to fetch history:", data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <NavBar page="history" />
      <div className="history-main-container">
        <h2>Search History</h2>
        {history.length === 0 ? (
          <p>No search history found.</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <p>{item.searchText}</p>
                <span>{new Date(item.createdAt).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;
