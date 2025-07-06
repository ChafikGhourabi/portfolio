'use client';

import { useState } from 'react';
import { suggestSkills, SuggestSkillsOutput } from '@/ai/flows/skill-highlighter';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SkillHighlighter() {
  const [jobDescription, setJobDescription] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState<SuggestSkillsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!jobDescription.trim()) {
      setError('Please paste a job description.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setSuggestedSkills(null);

    try {
      const result = await suggestSkills({ jobDescription });
      setSuggestedSkills(result);
    } catch (e) {
      setError('An error occurred while analyzing the description. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={8}
        className="bg-background"
      />
      <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        Analyze & Suggest Skills
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestedSkills && suggestedSkills.skills.length > 0 && (
        <div className="space-y-2 pt-4">
            <h4 className="font-semibold text-sm">Suggested skills to highlight:</h4>
            <div className="flex flex-wrap gap-2">
            {suggestedSkills.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
            </div>
        </div>
      )}
    </div>
  );
}
