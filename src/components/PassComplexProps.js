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

	const defauFill = {
    framework: [1,2,3,3],
    level: [],
    status: [],
    difficulty: []
  }
	const [arrayState, setArrayState] = useState(defauFill)

	useEffect(() => {

	}, [arrayProps])

	// const result = arrayState.map(i => {
	// 	return (
	// 		<div>
	// 			<h3>{i.name}</h3>
	// 		</div>
	// 	)
	// })



	return (
		<div className="child-complex-props">
			{/* { result} */}

			<GrandChild defauFill = {arrayState} />
		</div>
	)
}


const GrandChild = ({ defauFill }) => {

	useEffect(() => {
		const tmp = defauFill
		console.log('dedddd', tmp)
	})

	return (
		<div>

		</div>
	)
}