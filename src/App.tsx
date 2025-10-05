import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-xl">Loading SkySense...</p>
      </div>
    </div>
  );
}

export default App;
