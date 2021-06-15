import './RadioButton.css';


const RadioButton = (props) => {
    const {
        color,
        switchValue,
        onClick,
    } = props;

return (
        <button
        onClick={onClick}
        style={switchValue ? {backgroundColor: color} : {}}
        className={switchValue
        ? "custom-button-radio custom-button-radio-enable"
        : "custom-button-radio custom-button-radio-disable"}>
            <div /*swich*//>
        </button>
    )
}

export default RadioButton;