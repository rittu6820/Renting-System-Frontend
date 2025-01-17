import React from 'react';
import './style.css';
import { Icon } from '@iconify/react';
import emailOutline from '@iconify-icons/mdi/email-outline';

const AddProductInput = (props) => {
    return (
        <div className='AddProductInput-input-body'>
            <Icon icon={props.icon} className='AddProductInput-inputicon' />
            <input
                type={props.type}
                placeholder={props.placeholder}
                className='AddProductInput-input'
            />
        </div>
    );
};

AddProductInput.defaultProps = {
    placeholder: 'E-mail',
    icon: emailOutline,
    type: 'text',
};

export default AddProductInput;
