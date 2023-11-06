import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  const switchClass = on ? 'switch-button switch-button--on' : 'switch-button';

  return (
    <button onClick={onSwitch} className={switchClass}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
