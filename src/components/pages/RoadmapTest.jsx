import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import "./RoadmapTest.css";
import dropdownarrow from "../../img/arrow-down.png";

export const RoadmapTest = () => {
  const { roadmapId } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let debounceTimer;
    const fetchRoadmapById = async () => {
      try {
        const docRef = doc(db, "WebRoadmaps", roadmapId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const roadmapData = docSnapshot.data();
          const sortedSyllabus = {};
          const sortedKeys = Object.keys(roadmapData.syllabus).sort((a, b) =>
            a.substring(0, 2).localeCompare(b.substring(0, 2))
          );
          sortedKeys.forEach((key) => {
            // Modify the key to hide the first two letters
            const modifiedKey = key.substring(2);
            sortedSyllabus[modifiedKey] = roadmapData.syllabus[key];
          });
          setRoadmap({
            id: docSnapshot.id,
            ...roadmapData,
            syllabus: sortedSyllabus,
          });
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
      }, 1000);
    } else {
      setError("No roadmap ID found");
      setLoading(false);
    }

    return () => clearTimeout(debounceTimer);
  }, [roadmapId]);

  return (
    <div>
      {/* <h3>Roadmap Details</h3> */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="roadmap-detailed">
          <h1>
            <span className="title-style">{roadmap.roadmapTitle}</span> Roadmap
          </h1>
          <h6>{roadmap.tagline}</h6>
          <br />
          <p className="designed-caption">Designed by Industry Experts</p>
          <div className="accordion-topics">
            <div className="img-container">
              <h1>
                Still Confused? Get Help{" "}
                <span className="helpLink">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.replit.app&hl=en_IN&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </span>
              </h1>
            </div>
            <div className="details">
              {Object.keys(roadmap.syllabus).map((topic, topicIndex) => (
                <div key={topicIndex} className="details-container">
                  <details className="accordion" open={false}>
                    <summary className="accordion-summary">
                      {topic}
                      <img src={dropdownarrow} alt="Icon" className="icon" />
                    </summary>
                    <ul className="list-container">
                      {roadmap.syllabus[topic].map(
                        (subtopic, subtopicIndex) => (
                          <li key={subtopicIndex}>{subtopic}</li>
                        )
                      )}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapTest;
