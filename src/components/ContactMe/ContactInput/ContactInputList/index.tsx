import React, { FC } from 'react';

interface Props {
  title: string;
  inputName: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}
const ContactInputList: FC<Props> = ({ title, inputName, value, onChange, placeholder }) => {
  return (
    <div className="contact_input_list">
      <span>{title}</span>
      <input
        // type="text"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactInputList;
