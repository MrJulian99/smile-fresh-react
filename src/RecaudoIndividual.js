import React, { Component } from 'react'

export default class RecaudoIndividual extends Component{
	
	render(){
		 
		return(
			<tr>
				<p>ps</p>
				<td>{this.props.recaudado.mes} </td>
				<td>{this.props.recaudado.idDoctor} </td>
				<td>{this.props.recaudado.valor} </td>

			</tr>
			);
	}
}	
