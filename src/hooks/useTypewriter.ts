import { useEffect, useState } from 'react';

export const useTypewriter = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let index = 0;
      
      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      typeNextChar();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};

export const useMultiTypewriter = (
  texts: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration]);

  return currentText;
};
