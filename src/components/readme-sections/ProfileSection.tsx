
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ReadmeData } from '../ReadmeGenerator';

interface ProfileSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

export const ProfileSection = ({ data, onChange }: ProfileSectionProps) => {
  const updateField = (field: keyof ReadmeData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="e.g., Abdul Talha"
            required
          />
        </div>

        <div>
          <Label htmlFor="title">Professional Title *</Label>
          <Input
            id="title"
            value={data.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="e.g., Full-Stack Developer from India"
            required
          />
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={data.bio}
            onChange={(e) => updateField('bio', e.target.value)}
            placeholder="Brief description about yourself"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};
