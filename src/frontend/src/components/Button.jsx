import Iconify from "./Iconify"

function Button(props) {
    return (
        <button className="button">
            {props.icon && props.icon != '' &&
                <Iconify name={props.icon} />
            }
            {props.label}
        </button>
    )
}

export default Button