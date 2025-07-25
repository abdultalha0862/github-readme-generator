
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ReadmeData } from '../ReadmeGenerator';

interface StatsSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

export const StatsSection = ({ data, onChange }: StatsSectionProps) => {
  const updateField = (field: keyof ReadmeData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="githubUsername">GitHub Username</Label>
        <Input
          id="githubUsername"
          value={data.githubUsername}
          onChange={(e) => updateField('githubUsername', e.target.value)}
          placeholder="Your GitHub username"
          className="mb-4"
        />
        <p className="text-sm text-muted-foreground">
          Required for GitHub statistics and badges
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">GitHub Statistics</h3>
        
        <Card className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showGithubStats" className="text-base">
                Show GitHub Stats Card
              </Label>
              <p className="text-sm text-muted-foreground">
                Display your GitHub contribution statistics
              </p>
            </div>
            <Switch
              id="showGithubStats"
              checked={data.showGithubStats}
              onCheckedChange={(checked) => updateField('showGithubStats', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showStreakStats" className="text-base">
                Show GitHub Streak Stats
              </Label>
              <p className="text-sm text-muted-foreground">
                Show your current GitHub contribution streak
              </p>
            </div>
            <Switch
              id="showStreakStats"
              checked={data.showStreakStats}
              onCheckedChange={(checked) => updateField('showStreakStats', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showTopLanguages" className="text-base">
                Show Top Languages
              </Label>
              <p className="text-sm text-muted-foreground">
                Display your most used programming languages
              </p>
            </div>
            <Switch
              id="showTopLanguages"
              checked={data.showTopLanguages}
              onCheckedChange={(checked) => updateField('showTopLanguages', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showGithubTrophies" className="text-base">
                Show GitHub Trophies
              </Label>
              <p className="text-sm text-muted-foreground">
                Display your GitHub achievements and trophies
              </p>
            </div>
            <Switch
              id="showGithubTrophies"
              checked={data.showGithubTrophies || false}
              onCheckedChange={(checked) => updateField('showGithubTrophies', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showVisitorCount" className="text-base">
                Show Visitor Count Badge
              </Label>
              <p className="text-sm text-muted-foreground">
                Show a counter of profile visitors
              </p>
            </div>
            <Switch
              id="showVisitorCount"
              checked={data.showVisitorCount || false}
              onCheckedChange={(checked) => updateField('showVisitorCount', checked)}
            />
          </div>
        </Card>

        {data.githubUsername && (
          <div className="space-y-3">
            <Label className="text-base">Preview</Label>
            <div className="space-y-2 text-sm text-muted-foreground">
              {data.showGithubStats && (
                <div className="p-2 rounded bg-muted">
                  ✓ GitHub Stats will be displayed
                </div>
              )}
              {data.showStreakStats && (
                <div className="p-2 rounded bg-muted">
                  ✓ GitHub Streak will be displayed
                </div>
              )}
              {data.showTopLanguages && (
                <div className="p-2 rounded bg-muted">
                  ✓ Top Languages will be displayed
                </div>
              )}
              {data.showGithubTrophies && (
                <div className="p-2 rounded bg-muted">
                  ✓ GitHub Trophies will be displayed
                </div>
              )}
              {data.showVisitorCount && (
                <div className="p-2 rounded bg-muted">
                  ✓ Visitor Count Badge will be displayed
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
