import React, { useState, Suspense } from 'react';
import Landing from './sections/Landing';

// Lazy loading the heavier Dashboard to optimize initial load time for Landing page
const Dashboard = React.lazy(() => import('./layouts/Dashboard'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center text-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      <span className="text-xs tracking-widest uppercase opacity-70">Loading Interface...</span>
    </div>
  </div>
);

function App() {
  const [entered, setEntered] = useState(false);
  const [initialMode, setInitialMode] = useState('visual'); // 'visual' or 'technical'

  const handleEnter = (mode) => {
    setInitialMode(mode);
    setEntered(true);
  };

  return (
    <div className="min-h-screen bg-dark text-light overflow-hidden">
      {!entered ? (
        <Landing onEnter={handleEnter} />
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard initialMode={initialMode} onBackToLanding={() => setEntered(false)} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
