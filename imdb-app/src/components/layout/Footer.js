import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Eren AÇIKEL
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS &amp; 
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
            &nbsp; OMDB 
            </a>
            , For
            <a
              href="https://90pixel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
            &nbsp;90Pixel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
