var Calculadora = function(){
	var _api = {};
	var n1 = null;
	var n2 = null;
	var operacion = null;
	var resultado = null;
	var enc = 0;
	function init(){
		document.getElementById('mas').addEventListener('click', _api.sumar);
		document.getElementById('menos').addEventListener('click', _api.restar);
		document.getElementById('por').addEventListener('click', _api.multiplicar);
		document.getElementById('dividido').addEventListener('click', _api.dividir);
		document.getElementById('punto').addEventListener('click', _api.punto);
		document.getElementById('igual').addEventListener('click', _api.total);
		document.getElementById('on').addEventListener('click', _api.limpiar);
		document.getElementById('0').addEventListener('click', _api.adNumero);
		document.getElementById('1').addEventListener('click', _api.adNumero);
		document.getElementById('2').addEventListener('click', _api.adNumero);
		document.getElementById('3').addEventListener('click', _api.adNumero);
		document.getElementById('4').addEventListener('click', _api.adNumero);
		document.getElementById('5').addEventListener('click', _api.adNumero);
		document.getElementById('6').addEventListener('click', _api.adNumero);
		document.getElementById('7').addEventListener('click', _api.adNumero);
		document.getElementById('8').addEventListener('click', _api.adNumero);
		document.getElementById('9').addEventListener('click', _api.adNumero);
		document.getElementById('sign').addEventListener('click', _api.signo);
	}

	function estilo(tecla){
		tecla.style.transform="scale(0.85)";
		setTimeout(function() {tecla.style.transform="scale(1)";}, 100);
	}



	_api.sumar = function(){
		estilo(document.getElementById('mas'));
		if(operacion == null){
			operacion = 1;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				resultado = 1;
				actualizardisplay(n1, n2);
				operacion = 1;
			}else{
				resultado = null;
				operacion= null;
				actualizardisplay(1, n1);
				operacion = 1;
			}
		}
	}

	_api.restar = function(){
		estilo(document.getElementById('menos'));
		if(operacion == null){
			operacion = 2;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				resultado = 1;
				actualizardisplay(n1, n2);
				operacion = 2;
			}else{
				resultado = null;
				operacion= null;
				actualizardisplay(1, n1);
				operacion = 2;
			}
		}
	}

	_api.multiplicar = function(){
		estilo(document.getElementById('por'));
		if(operacion == null){
			operacion = 3;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				resultado = 1;
				actualizardisplay(n1, n2);
				operacion = 3;
			}else{
				resultado = null;
				operacion= null;
				actualizardisplay(1, n1);
				operacion = 3;
			}
		}
	}

	_api.dividir = function(){
		estilo(document.getElementById('dividido'));
		if(operacion == null){
			operacion = 4;
			actualizardisplay(2, '');
		}else{
			if(n2 != null){
				resultado = 1;
				actualizardisplay(n1, n2);
				operacion = 4;
			}else{
				resultado = null;
				operacion= null;
				actualizardisplay(1, n1);
				operacion = 4;
			}
		}
	}

	_api.limpiar = function(){
		estilo(document.getElementById('on'));
		var limpia = document.getElementById('display');
		limpia.innerHTML= '0';
		n1 = null;
		n2 = null;
	}

	_api.punto = function(){
		estilo(document.getElementById('punto'));
		var dp = document.getElementById('display').innerHTML.split("");
		for(var i =0; i < dp.length; i++){
			if(dp[i] == '.'){
				enc = 1;
			}
		}
		if(enc == 0 && dp.length < 8){
			actualizardisplay(3, '.');
			enc =2;
		}
	}

	_api.signo = function(){
		estilo(document.getElementById('sign'));
		var operar = document.getElementById('display');
		operando = parseFloat(operar.innerHTML)*(-1);
		operar.innerHTML = String(operando);
		if(n1 != null && n2 == null){
			n1 = String(operando);
		}else{
			n2 = String(operando);
		}
	}



	_api.total = function(){
		estilo(document.getElementById('igual'));
		resultado = 1;
		actualizardisplay(n1, n2);
	}

	_api.adNumero = function(e){
		estilo(document.getElementById(e.target.id));
		if(n1==null && operacion == null){
			if(String(e.target.id) != '0'){
				n1 = String(e.target.id);
				actualizardisplay(1, n1);
			}
		}else{

			if(n1.toString().length < 8 && operacion == null){
				if(enc==2){
					n1 = String(n1)+'.'+String(e.target.id);
					actualizardisplay(1, n1);
					enc = 0;
				}else{
					n1 = String(n1)+String(e.target.id);
					actualizardisplay(1, n1);
				}
			}
      else{

				if(n2==null && (operacion == 1 || operacion == 2 || operacion == 3 || operacion == 4)){
					if(String(e.target.id) != '0'){
						n2 = String(e.target.id);
						actualizardisplay(1, n2);
					}
				}else{
					if((n2 != null && n2.toString().length < 8) && (operacion == 1 || operacion == 2 || operacion == 3 || operacion == 4)){
						if(enc==2){
							n2 = String(n2)+'.'+String(e.target.id);
							actualizardisplay(1, n2);
							enc = 0;
						}else{
							n2 = String(n2)+String(e.target.id);
							actualizardisplay(1, n2);
						}
          }
		     }
			  }
		  }
	  }


	function actualizardisplay(a, b){
		var pantalla = document.getElementById('display');
		if(a ==3 && n1 == null){
			pantalla.innerHTML= String(pantalla.innerHTML)+'.';
			n1 = parseFloat(pantalla.innerHTML);
		}else if(a ==3 && n1 != null && n2 == null){
			pantalla.innerHTML= String(pantalla.innerHTML)+'.';
			n2 = parseFloat(pantalla.innerHTML);
		}else{
			pantalla.innerHTML= String(b).substring(0, 8);
		}
		if(operacion == 1 && n2 != null && resultado != null){
			pantalla.innerHTML = String(parseFloat(a)+parseFloat(b)).substring(0, 8);
			n1 = Number(a)+Number(b);
			n2 = null;
			resultado = null;
		}
		if(operacion == 2 && n2 != null && resultado != null){
			pantalla.innerHTML = String(Number(a)-Number(b)).substring(0, 8);
			n1 = Number(a)-Number(b);
			n2 = null;
			resultado = null;
		}
		if(operacion == 3 && n2 != null && resultado != null){
			pantalla.innerHTML = String(Number(a)*Number(b)).substring(0, 8);
			n1 = Number(a)*Number(b);
			n2 = null;
			resultado = null;
		}
		if(operacion == 4 && n2 != null && resultado != null){
			pantalla.innerHTML = String(Number(a)/Number(b)).substring(0, 8);
			n1 = Number(a)/Number(b);
			n2 = null;
			resultado = null;
		}
	}

	init();
	return _api;
};

var cal = new Calculadora();
