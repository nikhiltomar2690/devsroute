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
          const roadmapData = doc.data();
          const sortedSyllabus = {};
          // Extract keys, sort them, and construct a new object with sorted keys
          const sortedKeys = Object.keys(roadmapData.syllabus).sort();
          sortedKeys.forEach((key) => {
            sortedSyllabus[key] = roadmapData.syllabus[key];
          });
          fetchedData.push({
            id: doc.id,
            ...roadmapData,
            syllabus: sortedSyllabus,
          });
        });
        // Sort the roadmaps by ID
        fetchedData.sort((a, b) => a.id.localeCompare(b.id));
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
      <h1 className="roadmaps-title">Roadmaps</h1>
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
