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
		let aux=0;///mirar si algo
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
		 			/*console.log("doctor");
		 			console.log(doctor.doctor);
		 			console.log("doctor2");
		 			console.log(doctor2.doctor);*/
		 			if (doctor.doctor==doctor2.doctor && doctores.indexOf(doctor.doctor)<0){
		 			//console.log("ENTRO");
		 			valor=valor +parseInt(doctor2.valor)
		 			

		 			}


		 		})

		 				if(doctores.indexOf(doctor.doctor)<0){
		 					//console.log(doctor.doctor);
		 				listaRecaudos.push({idDoctor:doctor.doctor,valor:valor,mes:fecha[1]})
		 				doctores=doctores+doctor.doctor;
		 			}
			 						
		 	})
		 	//console.log(ListaFecha);
		 	//console.log(listaRecaudos);

    	 		listaRecaudos.forEach((recaudo)=>{
    	 			
    	 			//console.log(recaudo.idDoctor);
		 		if (recaudo.idDoctor !== final2){
		 			//console.log(recaudo.mes);

		 			//console.log(recaudo.idDoctor);
		 			//console.log(recaudo.valor);
		 			//console.log("llego");
		 			/*listaProps.push(
		 			<tr><td>{recaudo.mes}</td>
					<td>{recaudo.doctor} </td>
					<td>{recaudo.valor}</td></tr>
					)*/	
		 			listaProps.push(<RecaudoIndividual recaudado={recaudo} key={recaudo.idDoctor} />);
		 			console.log("lista prop");
		 			console.log(listaProps);
		 		}
		 		final2=recaudo.id;



		 	})


			
    }


		 	////hilo:no entra en la lista apra llenar con el componente intentar meterlo en la funcion no se sabe por que no da 
		 	// se puede intentar console.log datos habe rque pasa



			
	  

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