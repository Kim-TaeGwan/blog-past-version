import React from "react";

const ContactInputList = props => {
  const { title, inputName, value, onChange, placeholder } = props;
  return (
    <div className="contact_input_list">
      <span>{title}</span>
      <input
        type="text"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactInputList;
