import React, { Component } from 'react'
import pacienteIndividual from'./pacienteIndividual'

export default class listaPacientes extends Component{
	render(){
		let listaPacientes =[];
		let final = null;
		console.log("aja");


		 if(this.props.id != null){
		 	this.props.id.forEach((paciente)=>{
		 		if (paciente.id !== final){
		 			listaPacientes.push(<pacienteIndividual paciente={paciente} key={paciente.id} />);
		 		}
		 		final=paciente.id;
		 		console.log(paciente.id);
		 		console.log("aja");
		 		
		 	})


		 }

		return(


      <center>
				<div>
        <h3>Pacientes</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Id</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Direccion</th>
							<th>Telefono</th>
							<th>Ocupación</th>
							<th>Nacimiento</th>
							<th>Edad</th>
							<th>Genero</th>
						</tr>
					</thead>
					<tbody>

						{listaPacientes}
					</tbody>


				</table>
				</div>
			 </center>
			);
	}
}