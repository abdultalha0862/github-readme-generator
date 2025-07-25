
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Globe } from 'lucide-react';
import { ReadmeData } from '../ReadmeGenerator';

interface ContactSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

const socialPlatforms = [
  { key: 'github', label: 'GitHub', icon: Github, placeholder: 'username' },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, placeholder: 'username (without /in/ prefix)' },
  { key: 'stackoverflow', label: 'Stack Overflow', icon: Globe, placeholder: 'user-id (numbers only, e.g. 12345678)' },
  { key: 'medium', label: 'Medium', icon: Globe, placeholder: 'username' },
  { key: 'hashnode', label: 'Hashnode', icon: Globe, placeholder: 'username (with or without @)' },
  { key: 'devto', label: 'Dev.to', icon: Globe, placeholder: 'username' },
  { key: 'twitter', label: 'X (Twitter)', icon: Twitter, placeholder: 'username' },
  { key: 'facebook', label: 'Facebook', icon: Facebook, placeholder: 'username' },
  { key: 'instagram', label: 'Instagram', icon: Instagram, placeholder: 'username' },
  { key: 'bluesky', label: 'Bluesky', icon: Globe, placeholder: 'username (without @)' },
  { key: 'mastodon', label: 'Mastodon', icon: Globe, placeholder: 'username (without @)' },
  { key: 'reddit', label: 'Reddit', icon: Globe, placeholder: 'username' },
  { key: 'quora', label: 'Quora', icon: Globe, placeholder: 'username' },
  { key: 'behance', label: 'Behance', icon: Globe, placeholder: 'username' },
  { key: 'pinterest', label: 'Pinterest', icon: Globe, placeholder: 'username' },
  { key: 'codepen', label: 'CodePen', icon: Globe, placeholder: 'username' },
  { key: 'youtube', label: 'YouTube', icon: Youtube, placeholder: 'channel ID' },
  { key: 'twitch', label: 'Twitch', icon: Globe, placeholder: 'username' },
  { key: 'tiktok', label: 'TikTok', icon: Globe, placeholder: 'username' },
  { key: 'discord', label: 'Discord', icon: Globe, placeholder: 'invite code' },
  { key: 'leetcode', label: 'LeetCode', icon: Globe, placeholder: 'username' },
];

export const ContactSection = ({ data, onChange }: ContactSectionProps) => {
  const updateEmail = (email: string) => {
    onChange({ ...data, email });
  };

  const getSocialValue = (platform: string) => {
    const link = data.socialLinks.find(link => link.platform === platform);
    return link ? link.username : '';
  };

  const updateSocialLink = (platform: string, username: string) => {
    const existingLinks = data.socialLinks.filter(link => link.platform !== platform);
    const newLinks = username ? [...existingLinks, { platform, username }] : existingLinks;
    onChange({ ...data, socialLinks: newLinks });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="email">Email</Label>
        <div className="flex items-center gap-2 mt-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => updateEmail(e.target.value)}
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <Label className="text-base font-medium">Social Platforms</Label>
        <p className="text-sm text-muted-foreground mb-4">
          Add your social media profiles to connect with visitors
        </p>

        <div className="grid gap-4">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div key={platform.key}>
                <Label htmlFor={platform.key} className="text-sm">
                  {platform.label}
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <IconComponent className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id={platform.key}
                    value={getSocialValue(platform.key)}
                    onChange={(e) => updateSocialLink(platform.key, e.target.value)}
                    placeholder={platform.placeholder}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
