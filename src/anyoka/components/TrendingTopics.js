import React, { useEffect, useState } from 'react';
import './TrendingTopics.css'; // Import the CSS file for styling

const TrendingTopics = () => {
  const [trendingTopics, setTrendingTopics] = useState([]);

  // Simulating fetching data (replace this with actual API call when needed)
  useEffect(() => {
    const data = [
      { id: "1", topic: "#ClimateAction", summary: "Discussions and initiatives to combat climate change gain traction worldwide as leaders gather for climate summits.", tweet_volume: 120000 },
      { id: "2", topic: "#SpaceXLaunch", summary: "SpaceX successfully launches another rocket, pushing forward on its mission to make space travel accessible and safe.", tweet_volume: 95000 },
      { id: "3", topic: "#ArtificialIntelligence", summary: "AI advancements spark debates on ethical implications and the potential impacts on the job market.", tweet_volume: 85000 },
      { id: "4", topic: "#WorldCup2024", summary: "Excitement builds as teams prepare for the upcoming World Cup, with fans speculating about the favorites.", tweet_volume: 200000 },
      { id: "5", topic: "#NewMusicFriday", summary: "Artists release new tracks as part of 'New Music Friday,' with fans sharing their favorite songs and reactions.", tweet_volume: 75000 },
      { id: "6", topic: "#MentalHealthAwareness", summary: "Ongoing conversations highlight the importance of mental health, with people sharing personal stories and resources.", tweet_volume: 65000 },
      { id: "7", topic: "#TechSummit2024", summary: "The annual tech summit kicks off, showcasing innovations in AI, cybersecurity, and green technology.", tweet_volume: 58000 },
      { id: "8", topic: "#NBAFinals", summary: "The NBA Finals approach, with fans rooting for their favorite teams and debating likely MVPs.", tweet_volume: 160000 },
      { id: "9", topic: "#RecipeOfTheDay", summary: "Food enthusiasts share creative recipes, with a trending focus on autumn-inspired dishes.", tweet_volume: 48000 },
      { id: "10", topic: "#BlackFridayDeals", summary: "Early Black Friday deals start rolling out, with shoppers sharing tips on the best discounts and finds.", tweet_volume: 130000 }
    ];

    // Set the fetched data to the state
    setTrendingTopics(data);
  }, []);

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Topics</h1>
      <div className="trending-topics-list">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h2 className="topic-name">{topic.topic}</h2>
            <p className="topic-summary">{topic.summary}</p>
            <div className="tweet-volume">
              <span>{topic.tweet_volume.toLocaleString()}</span> Tweets
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
