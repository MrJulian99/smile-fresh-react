import React, { Component } from 'react';


export default class VerDoctores extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<tr>
					<td>{this.props.doctor.identificacionDoc} </td>
					<td>{this.props.doctor.nombre} </td>
					<td>{this.props.doctor.apellido}</td>
				  <td>{this.props.doctor.email}</td>
          <td>{this.props.doctor.nacimiento}</td>
          <td>{this.props.doctor.edad}</td>
          <td>{this.props.doctor.genero}</td>
			</tr>
			);
	}
}
