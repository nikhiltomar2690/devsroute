import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoadmapCard } from "./RoadmapCard";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const RoadmapTest = () => {
  const { roadmapId } = useParams();
  console.log("Roadmap ID:", roadmapId);
  const [roadmap, setRoadmap] = useState(null); // Initialize roadmap state
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchRoadmapById = async () => {
      try {
        console.log("Fetching roadmap with ID:", roadmapId);
        const docRef = doc(db, "Roadmaps", roadmapId); // Get document reference
        console.log("Document reference:", docRef);
        const docSnapshot = await getDoc(docRef);
        console.log("Document snapshot:", docSnapshot);
        if (docSnapshot.exists()) {
          // Update roadmap state with fetched data
          setRoadmap({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          setError("Roadmap document not found");
        }
      } catch (error) {
        console.error("Error fetching roadmap: ", error);
        setError("Error fetching roadmap");
      } finally {
        setLoading(false); // Update loading state
      }
    };

    if (roadmapId) {
      fetchRoadmapById();
    } else {
      setError("No roadmap ID found");
      setLoading(false); // Update loading state
    }
  }, [roadmapId]);

  return (
    <div className="roadmap-card">
      <h3>Roadmap Details</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        // Render RoadmapCard only when roadmap data is available
        roadmap && <RoadmapCard roadmap={roadmap} />
      )}
    </div>
  );
};
