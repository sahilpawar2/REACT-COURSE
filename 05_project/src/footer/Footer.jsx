import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" className="text-blue-500 hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;