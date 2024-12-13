import React from 'react';
import { MessageSquare } from 'lucide-react';

interface MatchResultProps {
  result: {
    feedback: string;
    matchPrompt: string;
  } | null;
}

export default function MatchResult({ result }: MatchResultProps) {
  if (!result) return null;

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-3">
        <MessageSquare className="text-blue-500" size={24} />
        <h2 className="text-xl font-semibold">Match Results</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Prompt Used</h3>
          <p className="text-gray-600 whitespace-pre-wrap">{result.matchPrompt}</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h3 className="text-lg font-medium text-gray-900">Analysis</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap">{result.feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}