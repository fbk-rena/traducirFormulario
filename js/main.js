
	function translate (){
		var titulo = document.getElementsByTagName('title')[0];
		var h2Sing = document.getElementById('form-signin-heading');
		var registroMail = document.getElementById('inputEmail');
		var registroPsw = document.getElementById('inputPassword');
		var etiquetaPsw = document.getElementsByTagName('label')[1];
		var etiquetaMail = document.getElementsByTagName('label')[0];
		var recordar = document.getElementsByTagName('span')[0];
		var boton = document.getElementsByClassName('btn')[0];

		titulo.innerHTML = 'Plantilla de Inicio para Bootstrap';
		h2Sing.innerHTML = 'Inicia sesion, por favor';
		registroMail.placeholder = 'Ingresa tu correo electronico';
		registroPsw.placeholder = 'Ingresa tu contraseña';
		etiquetaMail.innerHTML = 'correo electronico @';
		etiquetaPsw.innerHTML = 'contraseña';
		recordar.innerHTML = 'Recordarme';
		boton.innerHTML = 'Iniciar sesion';
	}
	translate();

	function formulario (){
		var correo = document.getElementById('inputEmail').value;
		var contraseña = document.getElementById('inputPassword').value;

		var tituloFormulario = document.getElementById('datosForm');
		var datos = document.getElementById('correoIngresado');

		tituloFormulario.innerHTML = "Datos Formulario";
    	datos.innerHTML = "El correo electrónico ingresado es: "  + correo + " <br> La clave ingresada es: " + contraseña;
	}
	