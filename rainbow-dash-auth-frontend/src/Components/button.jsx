import "@/styles/button.css"

export default function Button(props) {
	return (
		<button className="btn">
			{props.children}
		</button>
	)
}
