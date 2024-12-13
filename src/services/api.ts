interface MatchResponse {
  feedback: string;
  matchPrompt: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function matchResume(data: {
  prompt: string;
  resume: string;
  jobDescription: string;
}): Promise<MatchResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/match-resume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.prompt,
        resume: data.resume,
        jobDescription: data.jobDescription
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to match resume');
    }

    return await response.json();
  } catch (error) {
    console.error('Error matching resume:', error);
    throw error;
  }
}