$(document).ready(function(){
	/* Recorrido Json Api */
	var infoDribbble = function(data){
		console.log("hola");
		data.forEach(function(element){
			/* Mostrar en HTMO :*/
			var img = element.images.teaser;
			var visitas = element.views_count;
			var contadorComentarios = element.views_count;
			var like = element.likes_count;
			/* Parte Info en  hover:*/
			var titlePro = element.title;
			var description = element.description;
			var fecha = element.updated_at;
			//ID desde index.html "proyecto"
			$("#proyectos").append(` 
				<div>`+ visitas +`</div>
				<div>
					<img src="`+ img +`"></img>
				</div>
			`);
		});
	}


	/* Llamada de API */
	var ajaxDribbble = function(){
		$.ajax({
			url: 'https://api.dribbble.com/v1/users/megdraws/shots?access_token=fbbeb10dd624557fb23eb469706d163bfa435ba315154651642e2f7706a58760',
			type: 'GET',
			datatype: 'jsonp'
		})
		.done(function(response){
			console.log(response);
			infoDribbble(response); //Aquí llamo a function de foreach
		})
		.fail(function(){
			console.log("error");
		})
	}


	/*Cuando carge la pagina debe aparecer los poryectos*/
	$(window).load(function() {
		$("#proyectos").empty();
		ajaxDribbble();
	});

});	