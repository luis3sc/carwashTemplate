const services = {
    Sedan: [
        {
            codigo: 1,
            name: "Lavado Exterior",
            description: "Lavado exterior e interior",
            price: 25,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {   
            codigo: 2,
            name: "Aspirado Interior ID",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {
            codigo: 3,    
            name: "Encerado EN",
            description: "Lavado con cera y pulido y detallado",
            price: 35,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {   
            codigo: 40,
            name: "Aspirado Interior ID",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {
            codigo: 41,    
            name: "Encerado EN",
            description: "Lavado con cera y pulido y detallado",
            price: 35,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {   
            codigo: 40,
            name: "Aspirado Interior ID",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        },
        {
            codigo: 41,    
            name: "Encerado EN",
            description: "Lavado con cera y pulido y detallado",
            price: 35,
            imageURL: "https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/317501/c002826d87161791e4a22c287c0a1cf56ac41d81.XL.jpg"
        }
    ],
    Suv: [
        {
            codigo: 4,
            name: "Lavado Básico",
            description: "Lavado exterior e interior",
            price: 20,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 5,
            name: "Lavado Premium",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 6,
            name: "Lavado Ultra",
            description: "Lavado con cera y pulido y detallado",
            price: 50,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        }
    ],
    Hatchback: [
        {
            codigo: 7,
            name: "Lavado Básico",
            description: "Lavado exterior e interior",
            price: 20,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 8,
            name: "Lavado Premium",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 9,
            name: "Lavado Ultra",
            description: "Lavado con cera y pulido y detallado",
            price: 50,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        }
    ],
    Pickup: [
        {
            codigo: 10,
            name: "Lavado Básico",
            description: "Lavado exterior e interior",
            price: 20,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 11,
            name: "Lavado Premium",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 12,
            name: "Lavado Ultra",
            description: "Lavado con cera y pulido y detallado",
            price: 50,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        }
    ],
    Convertible: [
        {
            codigo: 13,
            name: "Lavado Básico",
            description: "Lavado exterior e interior",
            price: 20,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 14,
            name: "Lavado Premium",
            description: "Lavado con cera y pulido",
            price: 30,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 15,
            name: "Lavado Ultra",
            description: "Lavado con cera y pulido y detallado",
            price: 50,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        }
    ],
    Motocicleta: [
        {
            codigo: 16,
            name: "Lavado Estándar",
            description: "Lavado exterior",
            price: 15,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 17,
            name: "Lavado Detallado",
            description: "Lavado con atención a los detalles",
            price: 25,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        },
        {
            codigo: 18,
            name: "Lavado Rapido",
            description: "Lavado rápido",
            price: 10,
            imageURL: "https://www.tortaza.com.pe/Assets/tienda/images/vitrina/lucuma.webp"
        }
    ]
};
// datos carwash
const nombreNegocio = "nombre carwash";
const ubicacionNegocio = "Av esperanza, Calle Huamanga 152";
const numeroNegocio = "951512922";
// datos de cliente
const nombre = "alex";
const telefono = "972417095";
const numeroDocumento = "75710626";


let vehicleType;
let servicesContainer;
let selectedServiceData;
let pagoType;
let servicioSelect; //servicio seleccionado :(
//let vehiculoSelect; vehiculo seleccionado
let precioServicio;

const dcomision = 2.5;
let subtotal = 0;
let total = 0;

const datosReserva = {};

function updateServices() {
    vehicleType = document.querySelector('.radio-item input[name="vehicleType"]:checked').value;
    servicesContainer = document.getElementById('services');
    servicesContainer.innerHTML = "";
    services[vehicleType].forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-option');
        serviceDiv.innerHTML = `
                <label class="rel flex h100">
                    <input class="" type="radio" name="serviceType" id="serviceType" value="${service.name}" precio="${service.price}">
                    <div class="flex-row flex-a gap1 padding1 w100 border20 brdr-g3">
                        <div class="flex-centro">
                        <img class="mw-img-7 border20" src="${service.imageURL}" alt="${service.name}">
                        </div>
                        <div class="flex-colum flex-c w-wka">
                            <strong>${service.name}</strong>
                            <span>${service.description}</span>
                            <span>Precio: S/ ${service.price}</span>
                        </div>
                    </div>
                </label>
        `;
        servicesContainer.appendChild(serviceDiv);
    });
}
function showStep(stepNumber) {
    const stepElement = document.getElementById(`step${stepNumber}`);
    if (stepElement) {
        document.querySelectorAll('.form-step').forEach(step => {
            step.style.display = 'none';
        });
        stepElement.style.display = 'block';
    } else {
        console.error(`Elemento con ID 'step${stepNumber}' no encontrado.`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
});

//paso 1 a 2
const paso1a2 = document.querySelector('#step1 button');
paso1a2.addEventListener('click', function() {
    updateServices();
    console.log(document.querySelector('input[name="vehicleType"]:checked').value);
    //vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;  asignar valor seleccionado
    nextStep(2);
});
//paso 2 a 3
const paso25SiguienteButton = document.querySelector('#step2 button');
paso25SiguienteButton.addEventListener('click', function() {
    console.log(document.querySelector('input[name="serviceType"]:checked').value);
    var inputElement = document.querySelector('input[name="serviceType"]:checked');
    // Obtener el valor del atributo "precio"
    precioServicio = inputElement.getAttribute('precio');
    // Mostrar el valor en la consola
    console.log(precioServicio);
    // Obtener el precio del servicio seleccionado
    nextStep(3);
    servicioSelect = document.querySelector('input[name="serviceType"]:checked').value; // asignar valor seleccionado
});
//paso 3 a 4
const paso3SiguienteButton = document.querySelector('#step3 button');
paso3SiguienteButton.addEventListener('click', function() {
    console.log(document.getElementById('fechaSeleccionada').value);
    console.log(document.querySelector('input[name="time"]:checked').value);
    
    updateSummary();
    nextStep(4);
});
//paso 4 a 5
const paso4SiguienteButton = document.querySelector('#step4 button');
paso4SiguienteButton.addEventListener('click', function() {
    pagoResumen();
    nextStep(5);
});
function updateSummary() {
    //const vehicleType = document.querySelector('#vehicleType');
    let selectedService = document.querySelector('#serviceType');
    if (vehicleType && selectedService) {
        //const vehicleTypeValue = vehicleType.value;
        //const selectedServiceValue = selectedService.value;

        // selectedServiceData = services[vehicleType].find(service => service.name === selectedService.value);

        // localStorage.setItem('selectedService', JSON.stringify({
        //     name: selectedServiceData.name,
        //     price: selectedServiceData.price
        // }));

        datosReserva.tipoVehiculo = vehicleType;
        datosReserva.servicio = selectedService.value;
        datosReserva.fechaReserva = document.getElementById('fechaSeleccionada').value;
        horaReserva = document.querySelector('input[name="time"]:checked').value;//hora radio

        localStorage.setItem('datosReserva', JSON.stringify(datosReserva));
        subtotal = precioServicio;
        total = parseFloat(subtotal) + parseFloat(dcomision);    

        const summaryDiv = document.getElementById('summary');
        summaryDiv.innerHTML = `
        <div class="padsup-1 mgtp brdrbtmdash rel overvis">
            <label class="f-bold">Detalles de tu Reserva</label>
            <div class="w100 padsup-1">
                <p>- Tipo de Vehículo: <b>${vehicleType}</b></p>
                <p>- Tipo de Servicio: <b>${servicioSelect}</b></p>
                <p>- Fecha y Hora : <b>${datosReserva.fechaReserva} - ${horaReserva}</b></p>    
            </div>
            <div class="abs circ-1 bordercircular bgprinc circ-der"></div>
            <div class="abs circ-1 bordercircular bgprinc circ-izq"></div>
        </div>
        <div class="padsup-1 mgtp"> 
            <label class="f-bold">Resumen del Servicio</label>
            <div class="w100 padsup-1">
                <div class="flex-spacebetween">
                    <p>${servicioSelect}</p>
                    <b>s/. ${subtotal}</b>
                </div>
                <div class="flex-spacebetween">
                    <p>Comisión + IGV</p>
                    <b>s/. ${dcomision}</b>
                </div> 
                <div class="flex-spacebetween flex-a">
                    <p>Total a Pagar</p>
                    <b class="f-bold">s/. ${total}</b>
                </div>    
            </div>   
            
        </div>
        `; // <p>- Precio del Servicio: <b>${precioServicio}</b></p>
    } else {
        console.error('Por favor, selecciona un tipo de vehículo y servicio.');
    }
}

function nextStep(nextStep) {
    showStep(nextStep);
}

function submitForm() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('congratulations').style.display = 'block';
    pagoFinalizar();
}



function pagoResumen(){
    pagoType = document.querySelector('input[name="paymentMethod"]:checked').value; //tipo de pago
    subtotal = precioServicio;
    total = parseFloat(subtotal) + parseFloat(dcomision);
    let elemento = document.querySelector("#fondocambio");        
                if(pagoType == 'yape'){					
					elemento.classList.add("yape");
                    
					document.querySelector("#qrimage").src = `https://tortaza.com.pe/Assets/tienda/images/qr/pago/998881052.png`;
					document.querySelector("#metodopago").innerHTML =  `
					<img class="icon-circ" src="https://www.tortaza.com.pe/Assets/web/img/yape-logo.png" alt="">
					
                    <div class="w80 mgauto txt-centro padop1 borderbottom1">  
                        <div class="flex-spacebetween flex-a">
                            <div>Total a Pagar</div>
                            <div class="f-bold clr-yape-2 ftsz-1_5">s/. ${total}</div>
                        </div>
                    </div> 

                    <p class="normal txt-centro">
                        Ingresa a Yape desde tu celular y </br>escanéa este código QR
                    </p>
                    `;
					document.querySelector("#numeropago").innerHTML =  `<p class="normal tac">ó ingresa este número</p>`;
					document.querySelector("#numpago").innerHTML = "980852322";
				}else if(pagoType == 'plin'){
					elemento.classList.add("plin");
					document.querySelector("#qrimage").src = `https://tortaza.com.pe/Assets/tienda/images/qr/pago/998881052.png`;
					document.querySelector("#metodopago").innerHTML =  `
					<img class="icon-circ" src="https://www.tortaza.com.pe/Assets/tienda/images/webp/plin.webp" alt="">
					<p class="normal txt-centro">
                        <b>Pedido N°: 000050</b>
                        <br>
                        Ingresa a Yape desde tu celular y </br>escanéa este código QR
                    </p>`;
					document.querySelector("#numeropago").innerHTML =  `<p class="normal tac">ó ingresa este número</p>`;
					document.querySelector("#numpago").innerHTML = "980852322";
				}else if(pagoType == 'transferencia'){//Deposito-Transferencia
					elemento.classList.add("transferencia");
					document.querySelector("#qrimage").src = `https://tortaza.com.pe/Assets/tienda/images/qr/pago/998881052.png`;
					document.querySelector("#metodopago").innerHTML =  `
					<img class="icon-circ" src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" alt="">
					<p class="normal tac">
                        Ingresa a Yape desde tu celular y </br>escanéa este código QR
                    </p>`;
					document.querySelector("#numeropago").innerHTML =  `<p class="normal tac">ó ingresa este número</p>`;
					document.querySelector("#numpago").innerHTML = "980852322";
				}


    
}   

const paso5SiguienteButton = document.querySelector('#step5 button');
paso5SiguienteButton.addEventListener('click', function() {
    pagoConfirm();
    nextStep(6);
});

function pagoConfirm(){
    let summaryDiv = document.querySelector('#confirmPago');

    summaryDiv.innerHTML = `
    <div class="padsup-1 mgtp brdrbtmdash rel overvis">
        <label class="f-bold">Información del Negocio</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <p>- Carwash: <b>${nombreNegocio}</b></p>
            <p>- Ubicacion: <b>${ubicacionNegocio}</b></p>
            <p>- Numero : <b>${numeroNegocio}</b></p>    
        </div>
        <div class="abs circ-1 bordercircular bgprinc circ-der"></div>
        <div class="abs circ-1 bordercircular bgprinc circ-izq"></div>
    </div>
    <div class="padsup-1 mgtp brdrbtmdash rel overvis">
        <label class="f-bold">Detalles de tu Reserva</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <p>- Nro pedido: <b>000050</b></p>
            <p>- Vehículo: <b>${vehicleType}</b></p>
            <p>- Servicio: <b>${servicioSelect}</b></p>
            <p>- Fecha y Hora : <b>${datosReserva.fechaReserva} - ${horaReserva}</b></p>    
        </div>
        <div class="abs circ-1 bordercircular bgprinc circ-der"></div>
        <div class="abs circ-1 bordercircular bgprinc circ-izq"></div>
    </div>
    <div class="padsup-1 mgtp"> 
        <label class="f-bold">Resumen del Servicio</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <div class="flex-spacebetween">
                <p>${servicioSelect}</p>
                <b>s/. ${subtotal}</b>
            </div>
            <div class="flex-spacebetween">
                <p>Comisión + IGV</p>
                <b>s/. ${dcomision}</b>
            </div> 
            <div class="flex-spacebetween flex-a">
                <p>Total a Pagar</p>
                <b class="f-bold">s/. ${total}</b>
            </div>    
        </div>   
        
    </div>
        `;    
}
function pagoFinalizar(){
    let finalizarDiv = document.querySelector('#finalizar');

    finalizarDiv.innerHTML = `
    <div class="padsup-1 flex-colum gap-5 flex-a txt-centro">
        <img class="w100 mw-120 bordercircular bg-g2 padding05" src="https://static.vecteezy.com/system/resources/previews/009/636/805/original/ok-hand-gesture-3d-render-illustration-png.png" alt="">
        <div>
		    <p class="mgauto mw-250 ftsubh"> <b>${nombre}</b> A,Gracias por reservar en <b>${nombreNegocio}</b>, Tu reserva se ha enviado y estamos felices por confirmar tu asistencia</p>
		</div>
    </div>
    <div class="padsup-1 mgtp brdrbtmdash rel overvis">
        <label class="f-bold">Información del Negocio</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <p>- Carwash: <b>${nombreNegocio}</b></p>
            <p>- Ubicacion: <b>${ubicacionNegocio}</b></p>
            <p>- Numero : <b>${numeroNegocio}</b></p>    
        </div>
        <div class="abs circ-1 bordercircular bgprinc circ-der"></div>
        <div class="abs circ-1 bordercircular bgprinc circ-izq"></div>
    </div>
    <div class="padsup-1 mgtp brdrbtmdash rel overvis">
        <label class="f-bold">Detalles de tu Reserva</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <p>- Nro pedido: <b>000050</b></p>
            <p>- Vehículo: <b>${vehicleType}</b></p>
            <p>- Servicio: <b>${servicioSelect}</b></p>
            <p>- Fecha y Hora : <b>${datosReserva.fechaReserva} - ${horaReserva}</b></p>    
        </div>
        <div class="abs circ-1 bordercircular bgprinc circ-der"></div>
        <div class="abs circ-1 bordercircular bgprinc circ-izq"></div>
    </div>
    <div class="padsup-1 mgtp"> 
        <label class="f-bold">Resumen del Servicio</label>
        <div class="w100 padsup-1 flex-colum gap-25">
            <div class="flex-spacebetween">
                <p>${servicioSelect}</p>
                <b>s/. ${subtotal}</b>
            </div>
            <div class="flex-spacebetween">
                <p>Comisión + IGV</p>
                <b>s/. ${dcomision}</b>
            </div> 
            <div class="flex-spacebetween flex-a">
                <p>Total a Pagar</p>
                <b class="sf-bold">s/. ${total}</b>
            </div>    
        </div>   
        
    </div>
        `;    
}
const sendWhatsappButton = document.getElementById("send-whatsapp");
	sendWhatsappButton.addEventListener("click", () => {
	  const message = generateWhatsAppMessage();
	  const encodedMessage = encodeURIComponent(message);
	  const whatsappNumber = "51989396941"; // Replace with your actual WhatsApp number
	  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedMessage}`;
	  window.open(whatsappUrl, "_blank");
      cerrarModal('myModal5'); 

	});
    
	function generateWhatsAppMessage() {
	  const message = `¡Hola! Quiero hacer un pedido
	  \n\nDetalles del Pedido:
	  --------------------
	  *Cliente*
	  Nombre: *${nombre}*
	  Teléfono: *${telefono}*
	  --------------------
	  *DNI*
	  Número de Documento: *${numeroDocumento}*
	  --------------------
	  *Negocio*
	  Nombre del Negocio: *${nombreNegocio}*
	  Dirección: *${ubicacionNegocio}*
	  Numero: *${numeroNegocio}*
	  --------------------
	  *Servicio*
	  *${servicioSelect}* : s/ *${subtotal}*
      Comisión + IGV : s/ *${dcomision}*
	  Precio total: s/ *${total}*
	  --------------------
	  Quiero pagar con *${pagoType}*
	  --------------------
	  ¡Gracias!`;
	  return message;
	}