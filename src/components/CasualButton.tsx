import React from 'react';
import '../styles/CasualButton.css';

interface Props {
    action: string;
    whereTo: string;
    className?: string;
}

const CasualButton: React.FC<Props> = ({ action, whereTo, className }) => {
    return (
    <div className={`buttonContainer ${className}`}>
      <a className='buttonName' href={ whereTo } target='blank'>{action}</a>
    </div>
  );
};

export default CasualButton;