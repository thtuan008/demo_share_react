import React, { useEffect, useRef, useState } from 'react'

const PassComplexProps = () => {

	const [end, setEnd] = useState(0)
	const [start, setStart] = useState(0)

	const arrayPr = [
		{
			id: 1,
			name: 'array'
		},
		{
			id: 2,
			name: 'array 2'
		}
	]

	return (
		<React.Fragment>
			<div>
				<Child arrayProps={arrayPr} />
			</div>
		</React.Fragment>
	)
}

export default PassComplexProps


const Child = ({ arrayProps, jsonProps }) => {

	const [arrayState, setArrayState] = useState(arrayProps)

	useEffect(() => {

	}, arrayProps)

	const result = arrayState.map(i => {
		return (
			<div>
				<h3>{i.name}</h3>
			</div>
		)
	})

	return (
		<div className="child-complex-props">
			{ result}
		</div>
	)
}