import React, { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Did you know?
            </h2>
            <div className="text-lg text-slate-700">
              Your personal healthcare data alone is worth approximately{' '}
              <span className="font-bold text-blue-600">$250</span> on the market.
              <p className="mt-4">
                Every piece of your digital footprint has value. How carefully are you protecting yours?
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                I'll Think About That
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
