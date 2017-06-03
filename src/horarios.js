import React, { Component } from 'react';
import horariosregistrados from './HorariosRegistrados';
import VerHorarios from './VerHorarios';
import Modal from 'react-modal';

export default class horario  extends Component{



	constructor(){
			super()
			this.state = {

				isActive:false,
				value:'Lunes',
				valueh:'8:00 am - 8:30 am'

			}
			this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
			const value = target.value;
			const name = target.name;
	    this.setState({[name]: value});

	  }

componentWillMount(){

Modal.setAppElement('body');

}





	toggleModal = () => {

		this.setState({
			isActive:!this.state.isActive

		})

	}

	aceptar = () => {
			alert(this.state.value + '    ' + this.state.valueh )

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

		<h1>Ingresar Nuevo Horario</h1>

<h3 class="text-left " >Ingrese la siguiente informacion referente al registro de un nuevo horario para un medico:</h3>


<h4 class="text-left " >Seleccione un medico:</h4>

<h4 class="text-left " >Seleccione un dia de la semana:</h4>
<div class="form-group">
<select class="form-control" name="value" value={this.state.value} onChange={this.handleChange}>
									<option value="Lunes">Lunes</option>
									<option value="Martes">Martes</option>
									<option value="Miercoles">Miercoles</option>
									<option value="Jueves">Jueves</option>
									<option value="Viernes">Viernes</option>
									<option value="Sabado">Sabado</option>
									<option value="Domingo">Domingo</option>
								</select>
</div>

<h4 class="text-left " >Seleccione un horario:</h4>
<div class="form-group">
<select class="form-control" name="valueh" value={this.state.valueh} onChange={this.handleChange}>
									<option >8:00 am - 8:30 am </option>
									<option >8:30 am - 9:00 am </option>
									<option >9:00 am - 9:30 am</option>
									<option >10:00 am - 10:30 am</option>
									<option >10:30 am - 11:00 am</option>
									<option >11:00 am - 11:30 am</option>
									<option >11:30 am - 12:30 am</option>
								</select>
</div>

<pre></pre>

<div class="form-group">
<button class="button button1" onClick={this.toggleModal} >Cerrar</button>
<button class="button button1" onClick={this.aceptar} >Aceptar</button>
</div>


</Modal>





				</div>
			 </center>
			);
	}
}
