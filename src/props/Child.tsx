interface ChildProps {
	color: string
}

function Child({ color }: ChildProps) {
	return <div>{color}</div>
}

export default Child
