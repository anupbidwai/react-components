import Link from "next/link";

// button
export const ThemeButton = (props) => {
    const { label, varient = "btn--primary", linkObj = {}, className, ...rest } = props;
    const { href, ...restLinkObj } = linkObj;
    let btn = "";
    if (props.linkObj) {
        btn = (
            <Link href={href}>
                <a {...restLinkObj} {...rest} className={`btn ${varient ? varient : ''}`}>{label}</a>
            </Link>
        )
    } else {
        btn = <button className={`btn ${varient ? varient : ''}`} {...rest}>{label}</button>
    }
    return btn;
};

// text field
export const ThemeInput = (props) => {
    let inputField;
    const { type, error, ...rest } = props;
    if (type === 'textarea') {
        inputField = <textarea {...rest} />
    } else {
        inputField = <input type={type} {...rest} />
    }
    return (
        <div className="theme-input">
            {inputField}
            {error && <span className="error">{error}</span>}
        </div>
    )
};
