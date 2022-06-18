function inicializarAplicacion()
{
    crearTitulo(); 
    crearMenu();
    

}

function crearTitulo()
{
	
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="Tabla informativa de vacunas contra Covid-19";
    document.body.appendChild(tituloH1);
}
function crearMenu()
{
     let opciones = ["Listar Vacunas", "Buscar Vacuna", "Donde me puedo vacunar", "Deseo mas informacion"]

     opciones.forEach((opcion)=>{
		const boton = document.createElement("button");
		boton.innerHTML=opcion;

		switch(opcion){
			
			case "Listar Vacunas": {
				boton.addEventListener("click", ()=>{
					listarVacunas(vacunas);
				})
				break;
			}
			case "Buscar Vacuna": {
				boton.addEventListener("click", ()=>{
					let filtrados = buscarVacuna();
				  if(!(filtrados == null)){
            listarVacunas(filtrados);
          }
					
	
			  })
			  break;
			}
			case "Donde me puedo vacunar": {
				boton.addEventListener("click", () => {
					window.location='https://www.buenosaires.gob.ar/salud/vacunas/horarios-de-vacunatorios'
				})
				break;
			}	
			
			case "Deseo mas informacion": {
				boton.addEventListener("click", () => {
					agregarMail();
				})
			}
			

		}
		document.body.appendChild(boton);
		
     });
     
     
     

}


function agregarMail(){
	let mail = prompt("Ingresa tu mail")
  if (!mail) return;
	let mails = localStorage.getItem("ListaMails").split(",")
	if (!mails.includes(mail)){
		mails.push(mail)
    Swal.fire({
      title: 'Agregado',
      text: 'Se agrego el mail correctamente',
      icon: 'success',
    })
	}else{
    Swal.fire({
      title: 'Error',
      text: 'No se pudo agregar el mail, ya esta en la lista',
      icon: 'error',
    })
	}
	
	localStorage.setItem("ListaMails", mails)

}

function listarVacunas(listaVacunas)
{
   let miLista = document.querySelector("#listaVacunas");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaVacunas");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdOrigen = document.createElement("th");
   tdOrigen.innerHTML="Origen";
   encabezado.appendChild(tdOrigen);

   const tdEfectividad = document.createElement("th");
   tdEfectividad.innerHTML="Efectividad";
   encabezado.appendChild(tdEfectividad);


   miLista.appendChild(encabezado)
   
   listaVacunas.forEach((vacuna)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${vacuna.nombre}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${vacuna.origen}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${vacuna.efectividad}`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}

function buscarVacuna()
{
   let nombre = prompt("Ingresa el nombre de la vacuna que quiere buscar");
   if(nombre == null){
    return null;
   }
   
   let encontrados = vacunas.filter((vacuna)=>vacuna.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

   console.table(encontrados);

   return encontrados;

}