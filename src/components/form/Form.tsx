
export interface FormProps {
    type: string,
    id?: string,
    onChange: (e: any) => void;
}
const Form: React.FC<FormProps> = (props) => {
    const handleChange = (e: any) => {
        props.onChange(e);
    }
    return (<form data-testid='input-form'>
        <label htmlFor={props.id || 'file-input'}>load file</label>
        <input type={props.type} name="log-input" id={props.id ||"file-input"} onChange={handleChange} />
    </form>);
}
export default Form;