import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__link">
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>{' '}
        and{' '}
        <a
          href="https://www.flaticon.com/authors/pixelmeetup"
          title="Pixelmeetup"
        >
          Pixelmeetup
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
