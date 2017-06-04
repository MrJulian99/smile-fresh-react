import React, { Component } from 'react'
import CitasRegistradas from'./CitasRegistradas'
import RecaudoIndividual from './RecaudoIndividual'

export default class Recaudado extends Component{


	render(){
		let listaRecaudos =[];
		let listaProps=[];
		let ListaFecha=[];
		let final = null;
		let final2 = null;
		let x;
		let fecha=[];
		let doctores="s";
		let aux=0;
		let fecha1=[];
		let valor=0;
		
    		
		function buscar() {
		 	 
    	 if(fecha !== null ){
    	 	x = document.getElementById("myMonth").value;
    	 	fecha=x.split("-");	
    	 }
    	 	CitasRegistradas.forEach((cita)=>{
		 		if (cita.id !== final){
		 			if(cita.estado=="Finalizada"){
		 			fecha1=cita.fecha.split("-")
			 			if(fecha1[1]==fecha[1] && fecha1[0]==fecha[0]  ){
			 				ListaFecha.push(cita);
			 			}
		 			}
		 		}
		 		final=cita.id;

		 	})
		 	
		 	ListaFecha.forEach((doctor)=>{
		 		valor=0;
		 		ListaFecha.forEach((doctor2)=>{
		 			if (doctor.doctor==doctor2.doctor && doctores.indexOf(doctor.doctor)<0){
		 			valor=valor +parseInt(doctor2.valor)	

		 			}
		 		})
	 				if(doctores.indexOf(doctor.doctor)<0){
	 				listaRecaudos.push({idDoctor:doctor.doctor,valor:valor,mes:fecha[1]})
	 				doctores=doctores+doctor.doctor;
		 			}
			 						
		 	})

    	 		listaRecaudos.forEach((recaudo)=>{	
		 		if (recaudo.idDoctor !== final2){		 	
		 			listaProps.push(<RecaudoIndividual recaudado={recaudo} key={recaudo.idDoctor} />);
		 		}
		 		final2=recaudo.id;



		 	})


			
    }



			
	  

		return(


      <center>


				<div>
        <h3>Recaudado</h3>	
        
        
        	<div>
           	<input type="month" id="myMonth" />
       		<button type="button" name="button" onClick={buscar}>Buscar</button> 		
           </div>


				<table className= "table1">
					<thead>
						<tr>						
							<th>Mes</th>						
							<th>Doctor</th>						
							<th>valor</th>							
						</tr>
					</thead>
					<tbody>
						{listaProps}
					</tbody>
				</table>
				</div>
			 </center>
			);
	}
}