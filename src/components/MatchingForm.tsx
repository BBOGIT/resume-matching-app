import React, { useState } from 'react';
import { Send } from 'lucide-react';
import TextArea from './TextArea';

interface MatchingFormProps {
  onSubmit: (data: {
    prompt: string;
    resume: string;
    jobDescription: string;
  }) => void;
  isLoading: boolean;
}

export default function MatchingForm({ onSubmit, isLoading }: MatchingFormProps) {
  const [prompt, setPrompt] = useState('');
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ prompt, resume, jobDescription });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl">
      <TextArea
        label="Custom Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your custom matching instructions..."
      />

      <TextArea
        label="Resume Text"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste the resume text here..."
      />

      <TextArea
        label="Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
      />

      <button
        type="submit"
        disabled={isLoading || !prompt || !resume || !jobDescription}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isLoading ? (
          'Matching...'
        ) : (
          <>
            <Send size={20} />
            Match Resume
          </>
        )}
      </button>
    </form>
  );
}