
import React, { useState, useEffect } from 'react';
import '../styles/Musiccurator.css';

const MusicCurator = () => {
  const [city, setCity] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [feeling, setFeeling] = useState('happy');
  const [weather, setWeather] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [curatedMusic, setCuratedMusic] = useState([]);
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  const [motivationalPhrase, setMotivationalPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("YouTube Links updated:", youtubeLinks);
  }, [youtubeLinks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const requestData = { city, time_of_day: timeOfDay, feeling };

    try {
      const response = await fetch('http://localhost:5000/get-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received raw data:", data);

      setWeather(data.weather || '');
      setCityInfo(data.city_info || null);
      setCuratedMusic(data.curated_music || []);
      
      if (Array.isArray(data.youtube_links)) {
        setYoutubeLinks(data.youtube_links);
      } else {
        console.error("Invalid youtube_links data:", data.youtube_links);
        setYoutubeLinks([]);
      }

      // Set motivational phrase
      setMotivationalPhrase(data.motivational_phrase || "Keep shining bright!");

    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="MusicCurator">
      <h1>Music Curator</h1>

      <form onSubmit={handleSubmit} className="form-container">
        {/* City Input */}
        <div className="input-group">
          <label>City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
          </label>
        </div>

        {/* Time of Day Select */}
        <div className="input-group">
          <label>Time of Day:
            <select
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(e.target.value)}
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </label>
        </div>

        {/* Feeling Select */}
        <div className="input-group">
          <label>Feeling:
            <select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            >
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="energetic">Energetic</option>
              <option value="chill">Chill</option>
            </select>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Get Music
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Results Container */}
      {weather && (
        <div className="results-container">
          <div className="weather">
            <h2>Weather: {weather}</h2>
          </div>

          {/* City Info */}
          {cityInfo && (
            <div className="city-info">
              <h3>City Information</h3>
              <p><strong>City:</strong> {cityInfo.name}</p>
              <p><strong>Country:</strong> {cityInfo.country}</p>
              <p><strong>Region:</strong> {cityInfo.region}</p>
              <p><strong>Latitude:</strong> {cityInfo.latitude}</p>
              <p><strong>Longitude:</strong> {cityInfo.longitude}</p>
            </div>
          )}

          {/* Motivational Phrase */}
          {motivationalPhrase && (
            <div className="motivational-phrase">
              <h3>Motivational Phrase</h3>
              <p>{motivationalPhrase}</p>
            </div>
          )}

          {/* Curated Music List */}
          <div className="music-section">
            <h3>Curated Music:</h3>
            <ul className="music-list">
              {curatedMusic.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
          </div>

          {/* YouTube Video Links */}
          <div className="video-container">
            <h3>Music Videos</h3>
            {youtubeLinks.length > 0 ? (
              youtubeLinks.map((link, index) => (
                <div key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Watch Video: {link.split('/').pop()}
                  </a>
                </div>
              ))
            ) : (
              <p>No YouTube videos found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicCurator;
