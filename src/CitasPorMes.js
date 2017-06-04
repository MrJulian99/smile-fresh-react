import React, { Component } from 'react'
import CitasRegistradas from'./CitasRegistradas'
import CitaIndividual from'./CitaIndividual'

export default class CitaPorMes extends Component{
	render(){
	
			let listaCitasAux=[];
		let listaCitas =[];
		let final = null;
		let fecha1=[];
		let listaCitasMirar =[];
			let x;
			let fecha=[];
		

		function buscar() {
		
				
				if(fecha !== null ){
			 		x = document.getElementById("myMonth").value;
			 		fecha=x.split("-");	
				}

				 listaCitasAux=CitasRegistradas.sort(function(a,b){
				    a=a.fecha.split("-");
				    b=b.fecha.split("-");
				    return new Date(a[0], a[1],a[2] ) - new Date(b[0], b[1], b[2])
				  })
					listaCitasAux.forEach((cita)=>{
		 			if (cita.id !== final){
		 			fecha1=cita.fecha.split("-")
		 			if(fecha1[1]==fecha[1] && fecha1[0]==fecha[0]  ){		 		
	 				listaCitas.push(<CitaIndividual cita={cita} key={cita.id} />
					);
				
	
		 			}
		 	
		 			
		 		}
		 		
		 	
		 		
		 		
		 	})

			}
     



		 
				
		return(


      <center>
				<div>
        <h3>Citas</h3>
        <div>
           	<input type="month" id="myMonth" />
       		<button type="button" name="button" onClick={buscar}>Buscar</button> 		
           </div>
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