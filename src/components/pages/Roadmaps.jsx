import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { RoadmapCard } from "./RoadmapCard";
import "./Roadmaps.css";

export const Roadmaps = () => {
  const [roadmapsData, setRoadmapsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "WebRoadmaps"));
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
  }, [roadmapsData]);

  return (
    <div>
      <h1>Roadmaps</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="roadmapList">
          {roadmapsData.map((roadmap) => (
            <li key={roadmap.id}>
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
