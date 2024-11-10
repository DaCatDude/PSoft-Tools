import {useEffect} from 'react';

const Compiler = () => {
  useEffect(() => {
    //load JDoodle
    const script = document.createElement('script');
    script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script after the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-pym-src="https://www.jdoodle.com/embed/v1/531b60c7bdafc2d9"></div>
    </div>
  );
};

export default Compiler;