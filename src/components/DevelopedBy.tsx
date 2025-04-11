// components/DevelopedBy.js

import React from 'react';

const DevelopedBy = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p className="text-sm">
        Developed by{' '}
        <a
          href="https://digitalcowboy.com.au"
          className="text-yellow-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          DigitalCowboy
        </a>
      </p>
    </footer>
  );
};

export default DevelopedBy;