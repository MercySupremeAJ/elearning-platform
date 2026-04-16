import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useAuth } from "../hooks/useAuth";
import lessons from "../data/lessons.js";
import courses from "../data/courses.js";
import quizzes from "../data/quizzes.js";

const getWatchUrl = (embedUrl) => {
  try {
    const urlObj = new URL(embedUrl);
    const videoId = urlObj.pathname.split("/embed/")[1];
    const startTime = urlObj.searchParams.get("start");
    return `https://www.youtube.com/watch?v=${videoId}${startTime ? `&t=${startTime}s` : ''}`;
  } catch(e) {
    return embedUrl;
  }
};

const LessonPlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrolledCourses, progress, toggleLessonComplete, answers, resetCourseProgress } = useEnrollment();
  const { user } = useAuth();
  
  const courseLessons = lessons[courseId] || [];
  const courseDetails = courses.find((c) => c.id === Number(courseId));
  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));
  
  const completedLessons = progress[user?.username]?.[courseId] || [];
  
  const courseAnswers = answers?.[user?.username]?.[courseId] || {};
  
  // View State Manager
  const [activeTab, setActiveTab] = useState("lesson"); // 'lesson' | 'quiz' | 'certificate'
  const [quizScore, setQuizScore] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
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

  const toggleComplete = (lessonId) => {
    toggleLessonComplete(Number(courseId), lessonId);
  };

  const progressPercentage = courseLessons.length
    ? Math.round((completedLessons.length / courseLessons.length) * 100)
    : 0;
    
  const isCurrentLessonCompleted = currentLesson ? completedLessons.includes(currentLesson.id) : false;

  return (
    <div className="lesson-player-layout">
      {/* 🔹 Left Panel: Central Viewing Stage */}
      <div className="video-section">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          &larr; Back to Dashboard
        </button>
        
        {activeTab === "lesson" && currentLesson && (
          <div className="lesson-content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-panel)', padding: '3rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--text-h)' }}>{currentLesson.title}</h2>
            <p className="text-dim" style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>{currentLesson.content}</p>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <iframe
                src={currentLesson.videoUrl.replace('autoplay=1&', '')}
                title={currentLesson.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <a 
                href={getWatchUrl(currentLesson.videoUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "1.2rem", padding: "1rem 2rem", display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', borderRadius: '8px' }}
              >
                External Link: Watch Video on YouTube ↗
              </a>
            </div>
            
            <div style={{ padding: '2rem', width: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-h)' }}>Track Your Progress</h3>
              <p className="text-dim" style={{ marginBottom: '1.5rem' }}>When you finish watching, mark the module complete to advance.</p>
              
              {!isCurrentLessonCompleted ? (
                <button 
                  className="btn btn-success" 
                  style={{ padding: '1rem 3rem', fontSize: '1.2rem', width: '100%', maxWidth: '400px' }}
                  onClick={() => toggleComplete(currentLesson.id)}
                >
                  ✓ Mark Lesson as Complete
                </button>
              ) : (
                <button 
                  className="complete-btn completed"
                  onClick={() => toggleComplete(currentLesson.id)}
                  style={{ fontSize: '1rem', padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid var(--success)', color: 'var(--success)' }}
                >
                  Lesson Completed (Click to Undo)
                </button>
              )}
            </div>
          </div>
        )}

        {/* 🔹 Left Panel: Final Knowledge Check Quiz */}
        {activeTab === "quiz" && (
          <div className="glass-panel" style={{ animation: 'fadeInItem 0.5s ease-out', padding: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-h)', marginBottom: '1rem', textAlign: 'center' }}>Final Knowledge Check</h2>
            <p className="text-dim" style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '1.1rem' }}>Test your mastery of {courseDetails.title} with these core concepts.</p>
            
            <div className="quiz-questions">
              {(quizzes[courseId] || []).map((qObj, idx) => (
                <div key={idx} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Question {idx + 1}</h4>
                  <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.5 }}>
                    {qObj.q}
                  </p>
                  {qObj.options.map((opt, optIdx) => {
                    const isGraded = quizScore !== null;
                    const isSelected = selectedAnswers[idx] === optIdx;
                    const isCorrect = optIdx === qObj.a;
                    let optStyle = { display: 'block', marginBottom: '0.5rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', cursor: isGraded ? 'default' : 'pointer', transition: 'background 0.2s', border: '2px solid transparent' };
                    
                    if (isGraded) {
                      if (isCorrect) {
                        optStyle.border = '2px solid #10b981';
                        optStyle.background = 'rgba(16, 185, 129, 0.15)';
                      } else if (isSelected && !isCorrect) {
                        optStyle.border = '2px solid #ef4444';
                        optStyle.background = 'rgba(239, 68, 68, 0.15)';
                      }
                    } else if (isSelected) {
                      optStyle.border = '2px solid var(--accent)';
                      optStyle.background = 'rgba(59, 130, 246, 0.15)';
                    }

                    return (
                      <label key={optIdx} style={optStyle}>
                        <input 
                          type="radio" 
                          name={`q${idx}`} 
                          value={optIdx} 
                          checked={isSelected}
                          disabled={isGraded}
                          onChange={() => setSelectedAnswers(prev => ({ ...prev, [idx]: optIdx }))}
                          style={{ marginRight: '1rem' }} 
                        /> {opt}
                        {isGraded && isCorrect && <span style={{ float: 'right', color: '#10b981', fontWeight: 700 }}>✓ Correct</span>}
                        {isGraded && isSelected && !isCorrect && <span style={{ float: 'right', color: '#ef4444', fontWeight: 700 }}>✗ Wrong</span>}
                      </label>
                    );
                  })}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              {quizScore === null ? (
                <button 
                  className="btn btn-primary" 
                  style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', background: 'var(--gradient-primary)' }}
                  onClick={() => {
                    const questions = quizzes[courseId] || [];
                    let correct = 0;
                    questions.forEach((qObj, idx) => {
                      if (selectedAnswers[idx] === qObj.a) correct++;
                    });
                    const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
                    setQuizScore(score);
                  }}
                >
                  Grade My Assessment
                </button>
              ) : (
                <div>
                  <div style={{ 
                    background: quizScore >= 70 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                    padding: '2rem', borderRadius: '12px', 
                    border: `1px solid ${quizScore >= 70 ? 'var(--success)' : 'var(--danger)'}` 
                  }}>
                    <h3 style={{ color: quizScore >= 70 ? 'var(--success)' : 'var(--danger)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                      {quizScore >= 70 ? 'Assessment Passed!' : 'Assessment Failed'}
                    </h3>
                    <p>Score: {quizScore}% — {quizScore >= 70 ? 'Great job! You demonstrated strong mastery.' : 'You need 70% or higher to pass. Review the material and try again.'}</p>
                  </div>
                  {quizScore < 70 && (
                    <button 
                      className="btn btn-outline" 
                      style={{ marginTop: '1.5rem', padding: '1rem 3rem', fontSize: '1.1rem' }}
                      onClick={() => { setQuizScore(null); setSelectedAnswers({}); }}
                    >
                      🔄 Retake Assessment
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 🔹 Left Panel: Final Certificate */}
        {activeTab === "certificate" && (
          <div style={{ animation: 'fadeInItem 0.5s ease-out' }}>
            <div 
              id="certificate-frame"
              style={{ 
                background: '#fff', 
                color: '#1a1a1a', 
                padding: '4rem', 
                borderRadius: '8px',
                border: '15px solid #d4af37',
                textAlign: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <div style={{ border: '2px solid #d4af37', padding: '3rem' }}>
                <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', color: '#1e293b', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '4px' }}>Supremium Learning</h1>
                <h3 style={{ fontSize: '1.5rem', color: '#64748b', marginBottom: '3rem', fontWeight: 400, fontStyle: 'italic' }}>Certificate of Completion</h3>
                
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>This certifies that</p>
                <h2 style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '1rem', fontFamily: 'cursive', borderBottom: '1px solid #cbd5e1', paddingBottom: '1rem', display: 'inline-block', padding: '0 2rem' }}>
                  {user?.username}
                </h2>
                
                <p style={{ fontSize: '1.2rem', margin: '2rem 0 1rem 0' }}>has successfully completed the comprehensive curriculum for</p>
                <h2 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '4rem' }}>{courseDetails.title}</h2>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4rem' }}>
                  <div style={{ textAlign: 'center', width: '200px' }}>
                    <div style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontFamily: 'cursive', fontSize: '1.5rem', color: '#333' }}>Antigravity AI</div>
                    <p style={{ fontSize: '0.9rem' }}>Chief Technical Officer</p>
                  </div>
                  
                  <div style={{ width: '100px', height: '100px', background: 'radial-gradient(#d4af37, #997a00)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                    SEAL OF<br/>EXCELLENCE
                  </div>

                  <div style={{ textAlign: 'center', width: '200px' }}>
                    <div style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '1.2rem', color: '#333' }}>{new Date().toLocaleDateString()}</div>
                    <p style={{ fontSize: '0.9rem' }}>Date of Issue</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ padding: '1rem 3rem', fontSize: '1.2rem', background: '#d4af37', border: 'none', color: '#000', fontWeight: 'bold' }}
                onClick={() => window.print()}
              >
                📥 Download PDF Certificate
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 🔹 Right Panel: Master Playlist Navigation */}
      <div className="playlist-section">
        <div className="playlist-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>{courseDetails.title}</h3>
          </div>
          
          <div className="progress-container" style={{ marginTop: '1rem' }}>
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
          <div style={{ padding: '1rem', opacity: 0.7, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Modules</div>
          {courseLessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = activeTab === "lesson" && currentLesson && currentLesson.id === lesson.id;
            
            return (
              <div 
                key={lesson.id} 
                className={`lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed-item' : ''}`}
                style={{ cursor: 'pointer', display: 'flex', color: 'inherit' }}
                onClick={() => {
                  setCurrentLesson(lesson);
                  setActiveTab("lesson");
                }}
              >
                <div className="lesson-status">
                  {isCompleted ? <span className="check-icon">✓</span> : <span className="num-icon">{index + 1}</span>}
                </div>
                <div className="lesson-info">
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{lesson.title}</h4>
                  <span style={{ fontSize: '0.9rem', color: '#3b82f6', fontWeight: 500 }}>📺 Click to play</span>
                </div>
              </div>
            );
          })}

          <div style={{ padding: '1.5rem 1rem 0.5rem', opacity: 0.7, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '1rem' }}>Assessments & Rewards</div>
          
          <div 
            className={`lesson-item ${activeTab === 'quiz' ? 'active' : ''}`}
            style={{ cursor: 'pointer', display: 'flex', color: 'inherit', background: activeTab === 'quiz' ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }}
            onClick={() => setActiveTab('quiz')}
          >
            <div className="lesson-status" style={{ background: 'var(--accent)' }}>
              <span className="num-icon">🤔</span>
            </div>
            <div className="lesson-info">
              <h4 style={{ color: 'var(--accent)' }}>Knowledge Check</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Comprehensive Review Exam</span>
            </div>
          </div>

          <div 
            className={`lesson-item ${activeTab === 'certificate' ? 'active' : ''}`}
            style={{ cursor: progressPercentage === 100 ? 'pointer' : 'not-allowed', display: 'flex', color: 'inherit', opacity: progressPercentage === 100 ? 1 : 0.5 }}
            onClick={() => progressPercentage === 100 ? setActiveTab('certificate') : alert("You must complete 100% of the video modules to unlock the official certificate!")}
          >
            <div className="lesson-status" style={{ background: progressPercentage === 100 ? '#d4af37' : 'var(--bg-card)' }}>
              <span className="num-icon">{progressPercentage === 100 ? '🏆' : '🔒'}</span>
            </div>
            <div className="lesson-info">
              <h4 style={{ color: progressPercentage === 100 ? '#d4af37' : 'inherit' }}>Official Certificate</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{progressPercentage === 100 ? 'Download Document' : 'Requires 100% Mastery'}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;