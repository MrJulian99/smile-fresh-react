import React, { Component } from 'react'
import pacientes from'./pacientes'
import PacienteIndividual from'./pacienteIndividual'

export default class listaPacientes extends Component{
	render(){
		let listaPaciente =[];
		let final = null;



		 	pacientes.forEach((paciente)=>{
		 		if (paciente.id !== final){
		 			listaPaciente.push(<PacienteIndividual paciente={paciente} key={paciente.id} />);
		 		}
		 		final=paciente.id;



		 	})


		 console.log(listaPaciente);

		return(


      <center>
				<div>
        <h3>Pacientes</h3>
				<table className= "table1">
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

						{listaPaciente}
					</tbody>


				</table>
				</div>
			 </center>
			);
	}
}
