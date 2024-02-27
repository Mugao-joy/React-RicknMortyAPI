import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Rick and Morty App!</h2>
      <Link to="/characters">View Character List</Link>
    </div>
  );
}

export default Home;