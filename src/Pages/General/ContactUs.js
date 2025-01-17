import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import emailOutline from '@iconify-icons/mdi/email-outline';
import contactPoster from '../../Assets/contactPoster.png';
import githubIcon from '@iconify-icons/mdi/github';
import messageTextOutline from '@iconify-icons/mdi/message-text-outline';

const ContactUs = () => {
  return (
    <div className='ContactUs-body'>
      <div className='ContactUs-logo'>
        <img
          src={contactPoster}
          alt={'contactPoster'}
          className='ContactUs-poster'
        />
        <div className='ContactUs-create'>
          <a href='https://github.com/RentingSystemSE' target='blank'>
            Renting System <span className='Drawer-big'>&copy;</span> 2021
          </a>
        </div>
      </div>
      <div className='ContactUs-content'>
        <div className='ContactUs-text-body'>
          <div className='ContactUs-text'>Contact Us</div>
        </div>
        <div className='ContactUs-details'>
          <div className='ContactUs-div'>
            <div className='ContactUs-imagediv'>
              <a href='https://github.com/RentingSystemSE' target='blank'>
                <Icon icon={githubIcon} className='ContactUs-image' />
              </a>
            </div>
            <div className='ContactUs-namediv'>Community</div>
          </div>
          <div className='ContactUs-div'>
            <div className='ContactUs-imagediv'>
              <a
                href='https://github.com/RentingSystemSE/6-RentingSystem/discussions'
                target='blank'
              >
                <Icon icon={messageTextOutline} className='ContactUs-image' />
              </a>
            </div>
            <div className='ContactUs-namediv'>Discuss</div>
          </div>
          <div className='ContactUs-div'>
            <div className='ContactUs-imagediv'>
              <a href='mailto:renting.system.se@gmail.com' target='blank'>
                <Icon icon={emailOutline} className='ContactUs-image' />
              </a>
            </div>
            <div className='ContactUs-namediv'>Mail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
