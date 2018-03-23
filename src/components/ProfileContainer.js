import React, { Component } from 'react'
import { string, object } from 'prop-types'

export default class ProfileContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { expanded: false }
	}

  render() {
  	const {model, title} = this.props
  	return (
			<div>
				<p>{`expanded: ${this.state.expanded}`}</p>
				<p>{`model.id: ${model.id}`}</p>
				<p>{`title: ${title}`}</p>
			</div>
		)
  }
}

ProfileContainer.propTypes = {
	model: object.isRequired,
	title: string
}

ProfileContainer.defaultProps = {
	model: {
		id: 0
	},
	title: 'Your Name'
}