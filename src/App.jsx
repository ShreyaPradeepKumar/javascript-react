import './App.css'
import { useState } from 'react';

function AboutPage() {
  return <div>About Page</div>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>  
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <div>Footer</div>
    </div>
  );
}

export default App;