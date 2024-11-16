import React, { useState } from 'react';
import '../styles/GenerateDiscussion.css'; // Import the CSS file

function GenerateDiscussion() {
  const [topic, setTopic] = useState('');
  const [discussion, setDiscussion] = useState('');
  const [audioFile, setAudioFile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic) {
      setError('Please provide a topic');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/generate-discussion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (response.ok) {
        const data = await response.json();
        setDiscussion(data.text);
        setAudioFile(data.audio_file);
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to connect to the backend');
    }
  };

  const handleAudioDownload = () => {
    if (audioFile) {
      window.location.href = `http://localhost:5000/get-audio`; // Adjust to the correct path
    }
  };

  return (
    <div className="generate-discussion-container">
      <h1 className="heading">Generate AI Discussion</h1>
      <form onSubmit={handleSubmit} className="discussion-form">
        <div className="form-group">
          <label className="label">Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic"
            className="input-field"
          />
        </div>
        <button type="submit" className="generate-button">Generate Discussion</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {discussion && (
        <div className="discussion-result">
          <h2 className="result-heading">Generated Discussion:</h2>
          <p className="discussion-text">{discussion}</p>
          <button onClick={handleAudioDownload} className="download-button">Download Audio</button>
        </div>
      )}
    </div>
  );
}

export default GenerateDiscussion;
