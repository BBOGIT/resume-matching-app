import React, { useState } from 'react';
import MatchingForm from './components/MatchingForm';
import MatchResult from './components/MatchResult';
import { matchResume } from './services/api';
import { FileText } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [matchResult, setMatchResult] = useState<{
    feedback: string;
    matchPrompt: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: {
    prompt: string;
    resume: string;
    jobDescription: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await matchResume(data);
      setMatchResult(result);
    } catch (err) {
      setError('Failed to match resume. Please try again.');
      setMatchResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Resume Matcher</h1>
          </div>
          <p className="text-gray-600">
            Match your resume against job descriptions with custom criteria
          </p>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          <MatchingForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {error && (
            <div className="w-full max-w-3xl bg-red-50 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}

          <MatchResult result={matchResult} />
        </div>
      </div>
    </div>
  );
}

export default App;