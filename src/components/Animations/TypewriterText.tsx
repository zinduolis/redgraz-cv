'use client';

import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  startDelay?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorChar?: string;
}

const TypewriterText: FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = '',
  startDelay = 0,
  loop = true,
  cursor = true,
  cursorChar = '|',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      let charIndex = 0;
      const currentFullText = texts[currentIndex];

      const typeCharacter = () => {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeCharacter, speed);
        } else {
          setIsTyping(false);
          if (texts.length > 1 && loop) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      };

      timeout = setTimeout(typeCharacter, startDelay);
    };

    const startDeleting = () => {
      const currentFullText = texts[currentIndex];
      let charIndex = currentFullText.length;

      const deleteCharacter = () => {
        if (charIndex > 0) {
          setCurrentText(currentFullText.slice(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(deleteCharacter, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      };

      deleteCharacter();
    };

    if (!isDeleting && !isTyping) {
      startTyping();
    } else if (isDeleting) {
      startDeleting();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    isTyping,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
    startDelay,
    loop,
  ]);

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterText;