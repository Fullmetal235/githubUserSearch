import React from "react";

const Contact = () => {
  return (
    <div >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#17a2b8'
          fillOpacity='1'
          d='M0,64L40,64C80,64,160,64,240,90.7C320,117,400,171,480,192C560,213,640,203,720,186.7C800,171,880,149,960,144C1040,139,1120,149,1200,133.3C1280,117,1360,75,1400,53.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'
        ></path>
      </svg>
      <h1
        style={{ marginTop: "-3rem", marginBottom: "1rem" }}
        className='display-3'
      >
        CONTACT
      </h1>

      <a
        href='https://github.com/Fullmetal235'
        target='_blank'
        rel='noopener noreferrer'
        className='display-4'
      >
        GitHub
      </a>
      <br />

      <a
        href='https://twitter.com/BrownJarvise'
        target='_blank'
        rel='noopener noreferrer'
        className='display-4'
      >
        Twitter
      </a>
      <br />

      <a
        href='https://www.linkedin.com/in/jarvise-billups-brown-a41a44172/'
        target='_blank'
        rel='noopener noreferrer'
        className='display-4'
      >
        LinkedIn
      </a>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#17a2b8'
          fillOpacity='1'
          d='M0,64L40,64C80,64,160,64,240,90.7C320,117,400,171,480,192C560,213,640,203,720,186.7C800,171,880,149,960,144C1040,139,1120,149,1200,133.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Contact;