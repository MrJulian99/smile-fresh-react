import React, { Component } from 'react'
import HistoriasRegistradas from'./HistoriasRegistradas'
import HistoriasIndividual from'./HistoriasIndividual' 

export default class Historias extends Component{
	render(){
		let listaHistoria =[];
		let final = null;



		 	HistoriasRegistradas.forEach((historia)=>{
		 		if (historia.id !== final){
		 			listaHistoria.push(<HistoriasIndividual historia={historia} key={historia.id} />);
		 		}
		 		final=historia.id;



		 	})



		return(


      <center>
				<div>
        <h3>Historias</h3>
				<table className= "table1">
					<thead>
						<tr>
							<th>Id</th>
							<th>Fecha</th>
							<th>Doctor</th>
							<th>Paciente</th>
							<th>Descripcion</th>
							<th>Diagnostico</th>
						</tr>
					</thead>
					<tbody>

						{listaHistoria}
					</tbody>


				</table>
				</div>
			 </center>
			);
	}
}
