
var departamento = [
	 {id:1 ,nombre: 'Tacna'}
	,{id:2 ,nombre: 'Moquegua'}
	,{id:3 ,nombre: 'Ancash'}
	,{id:4 ,nombre: 'Cusco'}
	,{id:5 ,nombre: 'Arequipa'}
	,{id:6 ,nombre: 'Puno'}
	,{id:7 ,nombre: 'Madre de Dios'}
	,{id:8 ,nombre: 'Huanuco'}
	,{id:9 ,nombre: 'Tumbes'}
	,{id:10 ,nombre: 'Lima'}
	,{id:11 ,nombre: 'Junin'}
	,{id:12 ,nombre: 'Apurimac'}
	,{id:13 ,nombre: 'Cajamarca'}
	,{id:14 ,nombre: 'Huacavelica'}
	,{id:15 ,nombre: 'Piura'}
	,{id:16 ,nombre: 'Amazonas'}
	,{id:17 ,nombre: 'Loreto'}
	,{id:18 ,nombre: 'Ayacucho'}
	,{id:19 ,nombre: 'Callao'}
	,{id:20 ,nombre: 'La Libertad'}
	,{id:21 ,nombre: 'Pasco'}
	,{id:22 ,nombre: 'San Martin'}
	,{id:23 ,nombre: 'Ucayali'}
	,{id:24 ,nombre: 'Lamabayeque'}
	,{id:25 ,nombre: 'Ica'}
];


var filial = [
	 {id:1, nombre:'Arequipa' 	,depId:5}
	,{id:2, nombre:'Ayacucho' 	,depId:18}
	,{id:3, nombre:'Cajamarca' 	,depId:13}
	,{id:4, nombre:'Chiclayo' 	,depId:24}
	,{id:5, nombre:'Chimbote' 	,depId:3}
	,{id:6, nombre:'Cusco' 		,depId:4}
	,{id:7, nombre:'Huancayo' 	,depId:11}
	,{id:8, nombre:'Huanuco' 	,depId:8}
	,{id:9, nombre:'Huaraz' 	,depId:3}
	,{id:10, nombre:'Ica' 		,depId:25}
	,{id:11, nombre:'Iquitos' 	,depId:17}
	,{id:12, nombre:'Jaen' 		,depId:13}
	,{id:13, nombre:'Lima' 		,depId:10}
	,{id:14, nombre:'Piura' 	,depId:15}
	,{id:15, nombre:'Pucallpa' 	,depId:23}
	,{id:16, nombre:'Puerto Maldonado' ,depId:7}
	,{id:17, nombre:'Puno' 		,depId:6}
	,{id:18, nombre:'Tacna' 	,depId:1}
	,{id:19, nombre:'Tarapoto' 	,depId:22}
	,{id:20, nombre:'Trujillo' 	,depId:20}
	,{id:21, nombre:'Tumbes' 	,depId:9}
	,{id:21, nombre:'Moquegua' 	,depId:2}
];

var estacionTV = [

	 {id:1, ubicacion:"ANDAJES",filId:13,tipo:"TV"}
	,{id:2, ubicacion:"ANTIOQUIA",filId:13,tipo:"TV"}
	,{id:3, ubicacion:"BARRANCA",filId:13,tipo:"TV"}
	,{id:4, ubicacion:"CAJATAMBO",filId:13,tipo:"TV"}
	,{id:5, ubicacion:"CALANGO",filId:13,tipo:"TV"}
	,{id:6, ubicacion:"CANTA",filId:13,tipo:"TV"}
	,{id:7, ubicacion:"CAÑETE",filId:13,tipo:"TV"}
	,{id:8, ubicacion:"COAYLLO",filId:13,tipo:"TV"}
	,{id:9, ubicacion:"COMAS",filId:13,tipo:"TV"}
	,{id:10, ubicacion:"CHOSICA",filId:13,tipo:"TV"}
	,{id:11, ubicacion:"CHURIN",filId:13,tipo:"TV"}
	,{id:12, ubicacion:"HUAROCHIRI",filId:13,tipo:"TV"}
	,{id:13, ubicacion:"LA MOLINA",filId:13,tipo:"TV"}
	,{id:14, ubicacion:"LUNAHUANA",filId:13,tipo:"TV"}
	,{id:15, ubicacion:"MATUCANA",filId:13,tipo:"TV"}
	,{id:16, ubicacion:"OYON",filId:13,tipo:"TV"}
	,{id:17, ubicacion:"SAN MATEO",filId:13,tipo:"TV"}
	,{id:18, ubicacion:"SAN MIGUEL DE ACOS",filId:13,tipo:"TV"}
	,{id:19, ubicacion:"VENTANILLA",filId:13,tipo:"TV"}
	,{id:20, ubicacion:"YAUYOS",filId:13,tipo:"TV"}


	,{id:1, ubicacion:"AMBO",filId:8}
	,{id:2, ubicacion:"AUCAYACU",filId:8}
	,{id:3, ubicacion:"HERMILIO VALDIZAN",filId:8}
	,{id:4, ubicacion:"KICHKI (QUISQUI)",filId:8}
	,{id:5, ubicacion:"LA UNION",filId:8}
	,{id:6, ubicacion:"LLANTA – HUMALIES",filId:8}
	,{id:7, ubicacion:"PANAO",filId:8}
	,{id:8, ubicacion:"TINGO MARIA",filId:8}
	,{id:9, ubicacion:"BUENA VISTA",filId:8}
	,{id:10, ubicacion:"CERRO DE PASCO (Yanacancha)",filId:8}
	,{id:11, ubicacion:"HUACHON",filId:8}
	,{id:12, ubicacion:"HUARICA",filId:8}
	,{id:13, ubicacion:"OXAPAMPA",filId:8}
	,{id:14, ubicacion:"POZUZO",filId:8}
	,{id:15, ubicacion:"PTO. BERMUDEZ",filId:8}
	,{id:16, ubicacion:"TAPUC – AYAHUILCA",filId:8}
	,{id:17, ubicacion:"VILLA RICA",filId:8}
	,{id:18, ubicacion:"YANAHUANCA",filId:8}


	,{id:1 ,ubicacion:"CANDARAVE" ,filId:18}
	,{id:2 ,ubicacion:"ILABAYA" ,filId:18}
	,{id:3 ,ubicacion:"JORGE BASADRE – LOCUMBA" ,filId:18}
	,{id:4 ,ubicacion:"LOCUMBA – FUERTE ARICA" ,filId:18}
	,{id:5 ,ubicacion:"TARATA" ,filId:18}


// 7. CHUQUIBAM BA
// 8. MAJES
// 9. MADRIGAL LOCUMBA
// 10. MOLLENDO 11. OCOÑA
// 12. PAPACOLCA 
// 13. PUNTA DE BOMBON/Cocachacra 
// 14. YAUCA

// FILIAL MOQUEGUA
// 1. CARUMAS 
// 2. ILO
// 3. OMATE





];

var estacionRADIO = [

	 {id:1, nombre:"LIMA (FM)"						,filId:13}
	,{id:2, nombre:"LIMA (RADIO NACIONAL) (AM)"		,filId:13}
	,{id:3, nombre:"LIMA (RADIO LA CRÓNICA) (AM)"	,filId:13}
	,{id:4, nombre:"RTX LUNAHUANA (FM)"				,filId:13}

	,{id:1, nombre:"HUÁNUCO (FM)"					,filId:8}
	,{id:2, nombre:"RTX CERRO DE PASCO (FM)"		,filId:8}

	,{id:1, nombre:"TACNA (FM)" 					,filId:18}
	,{id:2, nombre:"TACNA (AM)" 					,filId:18}

];

var recursosHumanos = [
	
	 {id:1 ,nombre:"CALDERON VARA, Victor Manuel"	,condicion:"CAS"			,sueldo:1500,filId:18}
	,{id:2 ,nombre:"CHAGUA FLORES, Rufino"			,condicion:"CAP"			,sueldo:1200,filId:18}
	,{id:3 ,nombre:"COAQUERA VICENTE, César Arturo"	,condicion:"TEMPORAL"		,sueldo:150,filId:18}
	,{id:4 ,nombre:"MORANTE COAQUIRA, Raúl"			,condicion:"PRACTICANTE"	,sueldo:500,filId:18}
	,{id:5 ,nombre:"REVILLA FLORES, Pedro Alfredo"	,condicion:"CAP"			,sueldo:1500,filId:18}

];

function getDepId(dep)
{
	for ( ind in departamento )
	{
		if ( dep == departamento[ind].nombre)
		{
			return departamento[ind].id;
		}
	}
}

function getFilialByDep(dep)
{
	var depId = getDepId(dep); 
	var filiales = [];

	for (fil in filial)
	{
		if ( filial[fil].depId == depId )
		{
			filiales.push(filial[fil]);
		}
	}
	return filiales;
}

function getFilialById(fil)
{
	for ( ind in filial )
	{
		if ( fil == filial[ind].nombre)
		{
			return filial[ind];
		}
	}
}

function getAllTV(fil)
{
	var estaciones = [];
	for (ind in estacionTV)
	{
		if (fil.id == estacionTV[ind].filId )
		{
			estaciones.push(estacionTV[ind]);
		}
	}
	return estaciones;
}

function getAllRadio(fil)
{
	var estaciones = [];
	for (ind in estacionRADIO)
	{
		if (fil.id == estacionRADIO[ind].filId )
		{
			estaciones.push(estacionRADIO[ind]);
		}
	}
	return estaciones;
}

function getAllTVById(fid)
{
	var estaciones = [];
	for (ind in estacionTV)
	{
		if (fid == estacionTV[ind].filId )
		{
			estaciones.push(estacionTV[ind]);
		}
	}
	return estaciones;
}

function getAllRadioById(fid)
{
	var estaciones = [];
	for (ind in estacionRADIO)
	{
		if (fid == estacionRADIO[ind].filId )
		{
			estaciones.push(estacionRADIO[ind]);
		}
	}
	return estaciones;
}

function getAllRHById(fid)
{
	var rhs = [];
	for (ind in recursosHumanos)
	{
		if (fid == recursosHumanos[ind].filId )
		{
			rhs.push(recursosHumanos[ind]);
		}
	}
	return rhs;
}


