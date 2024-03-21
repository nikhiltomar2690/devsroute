import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { RoadmapCard } from "./RoadmapCard";
import "./RoadmapCard.css";

export const Roadmaps = () => {
  const [roadmapsData, setRoadmapsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Roadmaps"));
        // console.log(querySnapshot);
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setRoadmapsData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Roadmaps</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {roadmapsData.map((roadmap) => (
            <li key={roadmap.id} className="roadmap-card">
              <Link to={`/roadmaps/${roadmap.id}`}>
                <RoadmapCard roadmap={roadmap} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
