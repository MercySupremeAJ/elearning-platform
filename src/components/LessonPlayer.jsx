import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useAuth } from "../hooks/useAuth";
import lessons from "../data/lessons.js";
import courses from "../data/courses.js";

const LessonPlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrolledCourses, progress, toggleLessonComplete } = useEnrollment();
  const { user } = useAuth();
  
  const courseLessons = lessons[courseId] || [];
  const courseDetails = courses.find((c) => c.id === Number(courseId));
  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));
  
  const completedLessons = progress[user?.username]?.[courseId] || [];
  
  // State for the currently playing lesson
  const [currentLesson, setCurrentLesson] = useState(courseLessons[0] || null);

  // Redirect if not enrolled
  useEffect(() => {
    if (!isEnrolled) {
      navigate("/courses");
    }
  }, [isEnrolled, navigate]);

  if (!isEnrolled || !courseDetails) {
    return null;
  }

  const toggleComplete = (lessonId) =>
    toggleLessonComplete(Number(courseId), lessonId);

  const progressPercentage = courseLessons.length
    ? Math.round((completedLessons.length / courseLessons.length) * 100)
    : 0;
    
  const isCurrentLessonCompleted = currentLesson ? completedLessons.includes(currentLesson.id) : false;

  return (
    <div className="lesson-player-layout">
      {/* 🔹 Left Panel: Video Player */}
      <div className="video-section">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          &larr; Back to Dashboard
        </button>
        
        <div className="video-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(30, 41, 59, 0.5)', padding: '3rem', borderRadius: '16px' }}>
          {currentLesson ? (
            <>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>{currentLesson.title}</h2>
              <p className="text-dim" style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>{currentLesson.content}</p>
              
              <a 
                href={currentLesson.videoUrl.replace("/embed/", "/watch?v=")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: "1.5rem", padding: "1.5rem 3rem", display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}
              >
                <span style={{ fontSize: '2rem' }}>📺</span> Watch on YouTube
              </a>
              <p className="text-dim" style={{ marginTop: '1.5rem' }}>(Clicking the lessons on the right will also take you directly to YouTube)</p>
            </>
          ) : (
            <div className="no-video">No Video Available</div>
          )}
        </div>
        
        {currentLesson && (
          <div className="current-lesson-details" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              className={`complete-btn ${isCurrentLessonCompleted ? 'completed' : ''}`}
              onClick={() => toggleComplete(currentLesson.id)}
              style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}
            >
              {isCurrentLessonCompleted ? "✓ Lesson Marked as Completed" : "Mark Lesson as Complete"}
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Right Panel: Playlist */}
      <div className="playlist-section">
        <div className="playlist-header">
          <h3>{courseDetails.title}</h3>
          
          <div className="progress-container">
            <div className="progress-info">
              <span>Course Progress</span>
              <span className="progress-perc">{progressPercentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="lesson-list">
          {courseLessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = currentLesson && currentLesson.id === lesson.id;
            
            return (
              <a 
                href={lesson.videoUrl.replace("/embed/", "/watch?v=")}
                target="_blank"
                rel="noopener noreferrer"
                key={lesson.id} 
                className={`lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed-item' : ''}`}
                style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}
                onClick={(e) => {
                  setCurrentLesson(lesson);
                  // Link will naturally open YouTube in a new tab due to target="_blank"
                }}
              >
                <div className="lesson-status">
                  {isCompleted ? <span className="check-icon">✓</span> : <span className="num-icon">{index + 1}</span>}
                </div>
                <div className="lesson-info">
                  <h4>{lesson.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>Click to Watch &#8599;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;