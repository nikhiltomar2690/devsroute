import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoadmapCard } from "./RoadmapCard";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const RoadmapTest = () => {
  const { roadmapId } = useParams();
  const [roadmap, setRoadmap] = useState(null); // Initialize roadmap state
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchRoadmapById = async () => {
      try {
        const docRef = doc(db, "Roadmaps", roadmapId); // Get document reference
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          // Update roadmap state with fetched data
          setRoadmap({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error("Roadmap document not found");
        }
        setLoading(false); // Update loading state after fetching
      } catch (error) {
        console.error("Error fetching roadmap: ", error);
        setLoading(false); // Update loading state in case of error
      }
    };

    // Call fetchRoadmapById when component mounts
    fetchRoadmapById();
  }, [roadmapId]); // Fetch roadmap whenever roadmapId changes

  return (
    <div className="roadmap-card">
      <h3>Roadmap Details</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Render RoadmapCard only when roadmap data is available
        roadmap && <RoadmapCard roadmap={roadmap} />
      )}
    </div>
  );
};
