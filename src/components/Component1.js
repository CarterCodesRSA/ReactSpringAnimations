import React, { Component } from 'react'
import { Spring } from 'react-spring'

export default class Component1 extends Component {
	render() {
		return (
			<Spring
				from={{ opacity: 0, marginTop: -500 }}
				to={{ opacity: 1, marginTop: 0 }}
			>
				{props => (
					<div style={props}>
						<div style={c1Style}>
							<h1>Component 1</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
							<Spring
								from={{ number: 0 }}
								to={{ number: 10 }}
								config={{ duration: 10000 }}
							>
								{props => (
									<div style={props}>
										<h1 style={counter}>{props.number.toFixed(0)}</h1>
									</div>
								)}
							</Spring>
						</div>
					</div>
				)}
			</Spring>
		)
	}
}

const c1Style = {
	background: 'steelblue',
	color: 'white',
	padding: '1.5rem'
}

const counter = {
	background: '#333',
	textAlign: 'center',
	width: '100px',
	borderRadius: '50%',
	margin: '1rem'
}
