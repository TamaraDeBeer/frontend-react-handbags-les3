import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({buttonText, buttonDisabled, clickHandler}) {

    return (
        <button
            onClick={clickHandler}
            disabled={buttonDisabled}
        >
            {buttonText}
        </button>
    );
}

export default Button;