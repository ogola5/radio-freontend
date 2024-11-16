import React, { useState } from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import MusicCurator from './MusicCurator';
import GenerateDiscussion from './GenerateDiscussion';

function Homepage() {
  const [showMusicCurator, setShowMusicCurator] = useState(false);
  const [showGenerateDiscussion, setShowGenerateDiscussion] = useState(false);

  const toggleMusicCurator = () => {
    setShowMusicCurator(!showMusicCurator);
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header-section">
        <h1>Personalized Media</h1>
        <p>Experience music and news tailored just for you, powered by AI.</p>
        <a href="#features" className="learn-more-btn">Learn More</a>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Features</h2>
        <div className="feature-container">
          {/* Left Feature: Personalized AI Radio */}
          <div className="feature-item">
            <i className="icon-music"></i>
            <h3>My Curated Music</h3>
            <div className="radio-section">
              <input type="radio" id="aiRadio" name="feature" />
              <label htmlFor="aiRadio">Activate AI Radio</label>
            </div>
            <button className="feature-btn" onClick={toggleMusicCurator}>
              Music
            </button>
            {showMusicCurator && (
              <div className="music-curator-section">
                <MusicCurator />
              </div>
            )}
          </div>

          {/* Trending Topics Button */}
          <div className="feature-item">
            <i className="icon-trending"></i>
            <h3>Trending Topics</h3>
            <p>Stay updated with the latest discussions and trends.</p>
            <button className="feature-btn">
              <Link to="/trending-topics" className="link-btn">View Trending Topics</Link>
            </button>
          </div>

          {/* Right Feature: Podcast Discussions */}
          <div className="feature-item">
            <i className="icon-mic"></i>
            <h3>Podcast Discussions</h3>
            <p>Engage in thoughtful discussions on trending topics, updated regularly.</p>
            <button className="feature-btn" onClick={() => setShowGenerateDiscussion(!showGenerateDiscussion)}>
              {showGenerateDiscussion ? "Hide Discussions" : "Show Discussions"}
            </button>
            {showGenerateDiscussion && (
              <div className="podcast-discussion-section">
                <GenerateDiscussion />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Get Started with AI Personalized Radio</h2>
        <p>Sign up now and start enjoying music that feels like it was made for you.</p>
        <button className="signup-btn">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AI Personalized Radio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
