import React, { Component } from 'react'
import CitasRegistradas from'./CitasRegistradas'
import CitaIndividual from'./CitaIndividual'

export default class CitaPorMes extends Component{
	render(){
		let listaCitas =[];
		let final = null;
		

	
     



		 	CitasRegistradas.forEach((cita)=>{
		 		if (cita.fecha !== final){
		 			listaCitas.push(<CitaIndividual cita={cita} key={cita.id} />);
		 		}
		 		final=cita.fecha;
		 	
		 		
		 		
		 	})

		return(


      <center>
				<div>
        <h3>Citas</h3>
				<table className= "table1">
					<thead>
						<tr>


						

							<th>Id</th>
							<th>fecha</th>	
							<th>hora</th>
							<th>Doctor</th>
							<th>paciente</th>
							<th>duracion</th>
							<th>valor</th>
							<th>estado</th>
						
						</tr>
					</thead>
					<tbody>

						{listaCitas}
					</tbody>


				</table>
				</div>
			 </center>
			);
	}
}