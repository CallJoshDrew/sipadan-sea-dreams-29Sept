import { useState, useRef, useCallback } from 'react';

export const useAudio = (src: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (!audioRef.current) {
      // Try the local file first, fallback to Web Audio API
      audioRef.current = new Audio('/sounds/ocean-ambient.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      // Handle load errors with fallback
      audioRef.current.addEventListener('error', () => {
        console.log('Using Web Audio API fallback for ocean sounds');
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Create white noise and filter it to sound like ocean waves
        const bufferSize = audioContext.sampleRate * 2;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Generate white noise
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        
        // Low-pass filter to make it sound more like ocean waves
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, audioContext.currentTime);
        
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        source.start();
        setIsPlaying(true);
      });
    }
    
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      console.warn('Audio play failed:', error);
      // Trigger the error fallback
      if (audioRef.current) {
        audioRef.current.dispatchEvent(new Event('error'));
      }
    });
  }, [src]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  return {
    isPlaying,
    play,
    pause,
    toggle
  };
};