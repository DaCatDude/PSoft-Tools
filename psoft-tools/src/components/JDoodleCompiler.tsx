import React, { useEffect } from 'react';

const JDoodleCompiler = () => {
  useEffect(() => {
    // Function to add JDoodle script
    const loadJDoodleScript = () => {
      if (!document.querySelector('script[src="https://www.jdoodle.com/assets/jdoodle-pym.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadJDoodleScript();

    // Cleanup script on component unmount
    return () => {
      const script = document.querySelector('script[src="https://www.jdoodle.com/assets/jdoodle-pym.min.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <div data-pym-src="https://www.jdoodle.com/embed/v1/531b60c7bdafc2d9"></div>
    </div>
  );
};

export default JDoodleCompiler;