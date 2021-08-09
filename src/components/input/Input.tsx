import classes from './Input.module.css';
export interface InputProps {
  type: string;
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange: (e: any) => void;
}
const Input: React.FC<InputProps> = props => {
  const handleChange = (e: any) => {
    props.onChange(e);
  };
  return (
    <div
      data-testid='form-input'
      className={`${classes.inputContainer} ${
        props.className ? props.className : ''
      }`}>
      <label htmlFor={props.id || 'form-input'} className={classes.inputLabel}>
        {props.label || 'input'}
      </label>
      <input
        type={props.type}
        name={props.name || 'form-input'}
        id={props.id || 'form-input'}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
