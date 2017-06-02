import React, { Component } from 'react';
import horariosregistrados from './HorariosRegistrados';
import VerHorarios from './VerHorarios';
import Modal from 'react-modal';

export default class horario  extends Component{



	constructor(){
			super()
			this.state = {

				isActive:false
			}

	}



componentWillMount(){

Modal.setAppElement('body');

}





	toggleModal = () => {

		this.setState({
			isActive:!this.state.isActive

		})

	}





	render(){


		let nulo = null;
		let loshorarios = [];


				horariosregistrados.forEach((horario) => {if(horario.id !== nulo)
						{
							loshorarios.push(<VerHorarios horario={horario} key={horario.identificacionHor}/>);
						}

						nulo = horario.identificacionHor;

				});







		return(


      <center>
				<div>
        <h3>Horarios</h3>
				<table className= "table2">
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Email</th>
							<th>Dia</th>
							<th>Entrada</th>
							<th>Salida</th>
						</tr>
					</thead>

          <tbody>

					{loshorarios}

					</tbody>
				</table>



<button class="button button1" onClick={this.toggleModal} >Nuevo Horario</button>
<Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>

		Hello from modal.



<button class="button button1" onClick={this.toggleModal} >close</button>

</Modal>





				</div>
			 </center>
			);
	}
}
