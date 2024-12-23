import React, { useState, useRef, useEffect, useCallback } from 'react';

const FaqComponent: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const faqListRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const initialYRef = useRef(0);
  const initialTopRef = useRef(0);

  const questions = [
    { question: 'What is enterprisePro?', answer: 'enterprisePro is a comprehensive business management platform.' },
    { question: 'How does enterprisePro work?', answer: 'It integrates all aspects of business management into a single platform.' },
    { question: 'Is there a mobile version of enterprisePro?', answer: 'Yes, enterprisePro is fully mobile-responsive.' },
    { question: 'How do I get started with enterprisePro?', answer: 'Simply sign up on our website to start using the platform.' },
    { question: 'What types of businesses can use enterprisePro?', answer: 'enterprisePro is designed for both profit and non-profit organizations.' },
    { question: 'Is there customer support available?', answer: 'Yes, we offer 24/7 customer support to assist you with any issues.' }
  ];

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(prev => (prev === index ? null : index));  
  };

  const updateScrollbar = useCallback(() => {
    if (faqListRef.current && scrollbarThumbRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = faqListRef.current;
      const thumbHeight = Math.max(clientHeight / scrollHeight * clientHeight, 20); 
      const thumbPosition = (scrollTop / scrollHeight) * clientHeight;
      scrollbarThumbRef.current.style.height = `${thumbHeight}px`;
      scrollbarThumbRef.current.style.transform = `translateY(${thumbPosition}px)`;
    }
  }, []);

  useEffect(() => {
    if (faqListRef.current) {
      updateScrollbar();
    }
    const scrollHandler = () => updateScrollbar();
    faqListRef.current?.addEventListener('scroll', scrollHandler);

    return () => {
      faqListRef.current?.removeEventListener('scroll', scrollHandler);
    };
  }, [updateScrollbar]);
  const handleMouseMove = (e: MouseEvent) => {  
    if (isDraggingRef.current && faqListRef.current && scrollbarThumbRef.current) {
      const { scrollHeight, clientHeight } = faqListRef.current;
      const deltaY = e.clientY - initialYRef.current;
      const newTop = initialTopRef.current + deltaY;
      const thumbHeight = parseFloat(scrollbarThumbRef.current.style.height.replace('px', ''));
      const maxTop = clientHeight - thumbHeight;
      const newScrollTop = (newTop / maxTop) * (scrollHeight - clientHeight);
      faqListRef.current.scrollTop = newScrollTop;
      scrollbarThumbRef.current.style.transform = `translateY(${Math.min(Math.max(newTop, 0), maxTop)}px)`;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'auto';
  };

  return (
    <div className="faq-component bg-blue-50 py-8 flex items-start border border-black rounded-xl" style={{ width: '50vw' }}>
              <div
          className="faq-left w-full h-full flex flex-col overflow-y-auto"
          ref={faqListRef}
          style={{ maxHeight: '400px' }}
        >
          {questions.map((faq, index) => (
            <div
              key={index}
              className={`faq-question bg-black text-white rounded-lg p-4 mb-4 cursor-pointer ${
                activeQuestion === index ? 'opacity-80' : ''
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <div>{faq.question}</div>
              {activeQuestion === index && (
                <div className="faq-answer mt-2 bg-gray-800 text-white p-4 rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          ref={scrollbarRef}
          className="faq-scrollbar w-2 bg-red-300 rounded-lg ml-4 h-full"
          style={{
            position: 'relative',
            display: faqListRef.current && faqListRef.current.scrollHeight > faqListRef.current.clientHeight ? 'block' : 'none',
          }}
        >
          <div
            ref={scrollbarThumbRef}
            className="scrollbar-thumb bg-black rounded-lg w-full"
            style={{
              position: 'absolute',
              width: '100%',
              cursor: 'pointer',
            }}
          />
        </div>
    </div>
  );
};

export default FaqComponent;
