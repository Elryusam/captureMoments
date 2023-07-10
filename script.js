window.addEventListener('DOMContentLoaded', () => {
    fetch('https://tu-api.com/api/entradas_blog')
      .then(response => response.json())
      .then(data => {
        const entradasContainer = document.getElementById('entradas-container');
  
        data.forEach(entrada => {
          const entryDiv = document.createElement('div');
          entryDiv.classList.add('entry');
          entryDiv.innerHTML = `
            <h2>${entrada.titulo}</h2>
            <p>Autor: ${entrada.autor}</p>
            <p>Fecha de publicación: ${new Date(entrada.fecha_publicacion).toLocaleDateString()}</p>
            <p>${entrada.contenido}</p>
            ${entrada.url_imagen ? `<img src="${entrada.url_imagen}" alt="Imagen de la entrada">` : ''}
            <h3>Comentarios:</h3>
            <ul id="comentarios-${entrada.id}"></ul>
          `;
  
          entradasContainer.appendChild(entryDiv);
  
          // Obtener comentarios de la entrada
          fetch(`https://tu-api.com/api/http://localhost:3000/api/entradas_blog`)
            .then(response => response.json())
            .then(comentarios => {
              const comentariosList = document.getElementById(`comentarios-${entrada.id}`);
              
              comentarios.forEach(comentario => {
                const comentarioItem = document.createElement('li');
                comentarioItem.textContent = comentario.contenido;
                comentariosList.appendChild(comentarioItem);
              });
            })
            .catch(error => {
              console.error('Error al obtener los comentarios:', error);
            });
        });
      })
      .catch(error => {
        console.error('Error al obtener las entradas:', error);
      });
  });