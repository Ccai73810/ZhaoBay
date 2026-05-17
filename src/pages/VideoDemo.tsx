import { useState, useEffect, useCallback, useRef } from "react";
import { Stage } from "../components/Stage";
import { NarrationCaption } from "../components/NarrationCaption";
import { ProgressBar } from "../components/ProgressBar";
import { PlaybackControls } from "../components/PlaybackControls";
import { TOTAL_DURATION } from "../data/timeline";

export function VideoDemo() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setCurrentTime((prev) => {
        const next = prev + delta;
        if (next >= TOTAL_DURATION) {
          setIsPlaying(false);
          return TOTAL_DURATION;
        }
        return next;
      });

      animationRef.current = requestAnimationFrame(animate);
    },
    []
  );

  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, animate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasStarted) {
        setIsPlaying(true);
        setHasStarted(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [hasStarted]);

  const handlePlay = () => {
    if (currentTime >= TOTAL_DURATION) {
      setCurrentTime(0);
    }
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReplay = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setHasStarted(true);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#121826] flex items-center justify-center"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif' }}
    >
      <div
        className="relative w-full"
        style={{
          maxWidth: "1920px",
          aspectRatio: "16/9",
        }}
      >
        <Stage currentTime={currentTime} />

        <NarrationCaption currentTime={currentTime} />

        <ProgressBar currentTime={currentTime} />

        <PlaybackControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          onPlay={handlePlay}
          onPause={handlePause}
          onReplay={handleReplay}
          showControls={showControls}
          onToggleControls={() => setShowControls(!showControls)}
        />
      </div>
    </div>
  );
}
