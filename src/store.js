import React, { Component } from 'react';
import Doctores from'./Doctores';
import listaPacientes from'./listaPacientes';


	let citas=[
	{id:25,fecha:"2017-03-02" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"},
	{id:26,fecha:"2017-03-01" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"}
	],

	let pacientes= [
	{id: 2,nombre:"camilo",apellido:"melasuda",direcion:"p.sherman,callewallabey 52 sydney", telefono:"555",ocupacion:"doctor, que ironia",nacimiento:"1999-08-12",edad:"18",genero:"F"}
	],

	let doctores=[
	{id:1, nombre:"daniela", apellido:"ramirez", direccion:"calle 3", telefono:"312564", ocupacion:"odontologa", nacimiento:"1990-02-01", edad:"27", genero:"M"}, 
	{id:2, nombre:"daniela", apellido:"ramirez", direccion:"calle 3", telefono:"312564", ocupacion:"odontologa", nacimiento:"1990-02-01", edad:"27", genero:"M"}, 
	{id:3, nombre:"daniela", apellido:"ramirez", direccion:"calle 3", telefono:"312564", ocupacion:"odontologa", nacimiento:"1990-02-01", edad:"27", genero:"M"}, 
	{id:4, nombre:"daniela", apellido:"ramirez", direccion:"calle 3", telefono:"312564", ocupacion:"odontologa", nacimiento:"1990-02-01", edad:"27", genero:"M"}, 
	],

	let consultas=[
	{cedula_paciente:"123",nom_med:"",hallazgos:"",cobro:"", title: "Consulta paciente 123"}
	],


	let  citas=[
	{id:25,fecha:"2017-03-02" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"},
	{id:26,fecha:"2017-03-01" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"}
	],

	let historias= [ {id:23,fecha:"2017-03-02",doctor:"40",paciente: "73",descripcion:"el chico llega con extrema verguenza  cubriendose el pecho al parecer un golpe cortopunzate por parte de su pareja la causa",diagnostico:"hemorrgia en el pezon"}],

	let horarios= [
	{id:"5", doctor:"1" , dia:"", inicio:"", fin:"")}
	]




 export default class store extends Component{

 	constructor(){
 		super()
 	},

 	render(){

 		return(<Doctores store={doctores} />)
 		return(<listaPacientes store={pacientes} />)

 	}


 }