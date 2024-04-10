import "@/styles/forms.css"

export default function TextInput(props) {
    return (
        <div className="input-section">
            <label className="label">{props.title}</label>
            <input
                type={props.type}
                name={props.title}
                placeholder={props.placeholder}
                className="text-input"
            />
            <span className="form-message"></span>
        </div>
    )
}
