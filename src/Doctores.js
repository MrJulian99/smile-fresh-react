import React, { Component } from 'react';
import doctoresregistrados from './DoctoresRegistrados';
import VerDoctores from './VerDoctores';


export default class doctor extends Component{
	render(){


		let nulo = null;
		let losdotores = [];


				doctoresregistrados.forEach((doctor) => {if(doctor.id !== nulo)
						{
							losdotores.push(<VerDoctores doctor={doctor} key={doctor.identificacionDoc}/>);
						}

						nulo = doctor.identificacionDoc;

				});




		return(


      <center>
				<div>
        <h3>Doctores</h3>
				<table className= "table1">
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Email</th>
							<th>Nacimiento</th>
							<th>Edad</th>
							<th>Genero</th>
						</tr>
					</thead>

          <tbody>

					{losdotores}



					</tbody>



				</table>
				</div>
			 </center>
			);
	}
}
