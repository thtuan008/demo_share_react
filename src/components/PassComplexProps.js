import React, { useEffect, useRef, useState } from 'react'

const PassComplexProps = () => {

	const [end, setEnd] = useState(0)
	const [start, setStart] = useState(0)

	const ref2 = useRef(null)
	let reff = null

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

	useEffect(() => {
		// ref2.current = start
		console.log('ref', {reff: reff}, ref2);

	});

	return (
		<React.Fragment>
			<div ref={ ref2 }>
				<div ref = { ref => { return reff = ref } }></div>
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