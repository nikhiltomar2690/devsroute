import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export const RoadmapTest = () => {
  const { roadmapId } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let debounceTimer;
    const fetchRoadmapById = async () => {
      try {
        const docRef = doc(db, "WebRoadmaps", roadmapId); // Access Firestore document
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setRoadmap({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          setError("Roadmap document not found");
        }
      } catch (error) {
        console.error("Error fetching roadmap: ", error);
        setError("Error fetching roadmap");
      } finally {
        setLoading(false);
      }
    };

    if (roadmapId) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        fetchRoadmapById();
      }, 500); // Adjust the debounce delay as needed (e.g., 500ms)
    } else {
      setError("No roadmap ID found");
      setLoading(false);
    }

    return () => clearTimeout(debounceTimer); // Clear the timer on component unmount
  }, [roadmapId]);

  return (
    <div className="roadmap-card">
      <h3>Roadmap Details</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h4>{roadmap.title}</h4>
          <p>ID: {roadmap.id}</p>
          {roadmap.imageURL && (
            <img src={roadmap.imageURL} alt="Roadmap Image" />
          )}

          <div>
            {Object.keys(roadmap.syllabus).map((topic) => (
              <div key={topic}>
                <details>
                  <summary>{topic}</summary>
                  <ul>
                    {roadmap.syllabus[topic].map((subtopic, index) => (
                      <li key={index}>{subtopic}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapTest;
