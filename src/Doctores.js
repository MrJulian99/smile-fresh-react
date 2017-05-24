import React, { Component } from 'react';

export default class doctores extends Component{
	render(){
		let cadadoctor =[];
		let boton = [];
		let termino = null;



		return(


      <center>
				<div>
        <h3>Doctores</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Horario</th>
						</tr>
					</thead>
				</table>
				</div>
			 </center>
			);
	}
}
