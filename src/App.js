import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated imports for React Router v6
import Homepage from './ogola/components/pages/Homepage';
import GenerateDiscussion from './ogola/components/pages/GenerateDiscussion';  // Import the GenerateDiscussion component
import MusicCurator from './ogola/components/pages/MusicCurator';
import TrendingTopics from './anyoka/components/TrendingTopics';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes using Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Default landing page */}
          <Route path="/generate-discussion" element={<GenerateDiscussion />} /> {/* Page to generate discussion */}
          <Route path="/music-curator" element={<MusicCurator />} /> {/* Page for Music Curator */}
          <Route path="/trending-topics" element={<TrendingTopics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
