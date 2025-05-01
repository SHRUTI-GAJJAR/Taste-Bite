import React, { useEffect } from 'react';

const UnBookMark = () => {
  useEffect(() => {
    import('https://cdn.lordicon.com/lordicon.js');
  }, []);

  return (
    <lord-icon
      src="https://cdn.lordicon.com/oiiqgosg.json"
      trigger="click"
      state="morph-unmarked-bookmark"
      colors="primary:#ffffff"
      style={{ width: '18px', height: '18px' }}
    ></lord-icon>
  );
};

export default UnBookMark;
