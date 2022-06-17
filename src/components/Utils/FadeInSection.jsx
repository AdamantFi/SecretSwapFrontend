import React, {useState, useRef, useEffect} from 'react'

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setVisible(entry.isIntersecting)
            }
        });
    });
    observer.observe(domRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.unobserve(domRef.current);
  }, []);
  
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection