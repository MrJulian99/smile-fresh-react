import React, { Component } from 'react'


export default class HistoriasIndividual extends Component{
	
	render(){
		
		return(
			<tr>	
					<td>{this.props.historia.id} </td>
					<td>{this.props.historia.fecha} </td>
					<td>{this.props.historia.doctor} </td>
					<td>{this.props.historia.paciente} </td>
					<td>{this.props.historia.descripcion} </td>
					<td>{this.props.historia.diagnostico} </td>
					

			</tr>
			);
	}
}	
