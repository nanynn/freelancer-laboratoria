/*
 * Archivo principal de JS
 */
(function mostrar(){
	var boxes = Array.from(document.getElementsByClassName('portfolio-img'));
	var modal = document.getElementById('box-modal-portfolio');
	var bodyModal, close, espacio, contenedor, parrafo, tit, text;

	boxes.forEach(function(box){
		box.addEventListener('click', function(){
			modal.innerHTML = "";
			
			bodyModal = document.createElement('div');
			bodyModal.classList.add('modal-body');

			contenedor=document.createElement('h2');
			tit= document.createTextNode('Portfolio Uno');
			contenedor.classList.add('titulo-cinco');

			parrafo=document.createElement('p');
			text=document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolorum nostrum eveniet illo sed ea necessitatibus animi velit aliquam.');
			parrafo.classList.add('texto-modal'); 
			
			
			bodyModal.innerHTML = box.innerHTML;

			contenedor.appendChild(tit);
			parrafo.appendChild(text);

			modal.appendChild(bodyModal);
			modal.appendChild(contenedor);
			modal.appendChild(parrafo);

			modal.classList.remove('hide');

			close=document.createElement('div');
			close.classList.add('close');

			espacio = document.createElement('div');
			espacio.classList.add('fa', 'fa-times-circle');

			close.appendChild(espacio);
			modal.appendChild(close);

			close.addEventListener('click', function(){
				modal.classList.add('hide');
			});
		});
	});
})();