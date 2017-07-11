$(document).ready(function(){
	/* Recorrido Json Api */
	var infoDribbble = function(data){
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
			$("#proyectos").append(/*functionEjm(img,visitas,contadorComentarios,like,titlePro,description,fecha)*/);
		});
	}

		var armarTemplate = function(img,visitas,contadorComentarios){
			var printed=` <div class= "col-md-4">
						<div class = "row">
							<div class = col-md-12>
								<a class= img-link>
									<img src="`+ img +`">
								</a>
							</div>
						</div>
						<div class = "row">
							<div class = col-md-3>
								<i class="fa fa-eye" aria-hidden="true">`+ visitas +`</i>
							</div>
							<div class = "col-md-3">
								<i class="fa fa-comment" aria-hidden="true">`+contadorComentarios+`</i>
							</div>
							<div class="col-md-3">
								
							</div>
						</div>
					</div>
				`
			return printed;
		}

	/* Llamada de API */
	var ajaxDribbble = function(d){
		$.ajax({
			url: 'https://api.dribbble.com/v1/users/megdraws/shots?access_token=fbbeb10dd624557fb23eb469706d163bfa435ba315154651642e2f7706a58760',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			console.log(response);
			infoDribbble(response); //Aquí llamo a function de foreach
		})
		.fail(function(){
			console.log("error");
		})
	}

});	