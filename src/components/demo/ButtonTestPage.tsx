import React, { useState } from 'react';
import { Button } from '../ui/button';

export const ButtonTestPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#150A05] mb-4">
            Button Test Page
          </h1>
          <p className="text-lg text-gray-600">
            Testing refined button variants without gradients
          </p>
        </header>

        {/* Interactive Counter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#150A05] mb-4">
            Interactive Test
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg">Click count: {clickCount}</span>
            <Button
              variant="default"
              onClick={() => setClickCount(prev => prev + 1)}
            >
              Increment
            </Button>
            <Button
              variant="outline"
              onClick={() => setClickCount(0)}
            >
              Reset
            </Button>
            <Button
              variant="premium"
              onClick={handleAsyncAction}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Async Action'}
            </Button>
          </div>
        </div>

        {/* Size Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#150A05] mb-4