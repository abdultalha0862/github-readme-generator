
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download, FileText, Globe, FileImage } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ReadmeData } from './ReadmeGenerator';
import { generateMarkdown, generateHTML, generatePlainText, generatePDF } from '@/utils/exportUtils';

interface ExportMenuProps {
  data: ReadmeData;
}

export const ExportMenu = ({ data }: ExportMenuProps) => {
  const { toast } = useToast();

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleMarkdownExport = () => {
    const markdown = generateMarkdown(data);
    downloadFile(markdown, 'README.md', 'text/markdown');
    toast({
      title: "Markdown Downloaded!",
      description: "README.md file has been downloaded.",
    });
  };

  const handleHTMLExport = () => {
    const html = generateHTML(data);
    downloadFile(html, `${data.name}-profile.html`, 'text/html');
    toast({
      title: "HTML Downloaded!",
      description: "HTML file has been downloaded.",
    });
  };

  const handleTextExport = () => {
    const text = generatePlainText(data);
    downloadFile(text, `${data.name}-profile.txt`, 'text/plain');
    toast({
      title: "Text Downloaded!",
      description: "Plain text file has been downloaded.",
    });
  };

  const handlePDFExport = () => {
    try {
      generatePDF(data);
      toast({
        title: "PDF Downloaded!",
        description: "PDF file has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Export Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleMarkdownExport} className="gap-2">
          <FileText className="h-4 w-4" />
          Markdown (.md)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleHTMLExport} className="gap-2">
          <Globe className="h-4 w-4" />
          HTML (.html)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTextExport} className="gap-2">
          <FileText className="h-4 w-4" />
          Plain Text (.txt)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlePDFExport} className="gap-2">
          <FileImage className="h-4 w-4" />
          PDF (.pdf)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
