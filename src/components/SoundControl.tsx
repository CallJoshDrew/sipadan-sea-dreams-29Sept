import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SoundControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const SoundControl = ({ isPlaying, onToggle }: SoundControlProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200"
        aria-label={isPlaying ? "Mute background sound" : "Play background sound"}
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-white" />
        ) : (
          <VolumeX className="h-4 w-4 text-white" />
        )}
      </Button>
    </div>
  );
};

export default SoundControl;