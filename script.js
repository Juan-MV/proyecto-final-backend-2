async function fetchChuckNorrisJoke() {
    try {
        // Obtener datos de la API de chistes de Chuck Norris
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        // Comprobar si la solicitud fue exitosa (código de estado 200)
        if (response.ok) {
            // Analizar la respuesta JSON
            const data = await response.json();

            // Obten el chiste de la respuesta
            const joke = data.value;

            // Actualiza el contenido del div 'resultado' con el chiste
            document.getElementById('resultado').innerText = joke;
            
            // Cargar imagen aleatoria
            loadRandomImage();
        } else {
            console.error('Failed to fetch Chuck Norris joke:', response.statusText);
        }
    } catch (error) {
        console.error('Error while fetching Chuck Norris joke:', error);
    }
}

// Conjunto de imágenes
const imageUrls = [
    'resources/chuck-img/chuck1.jpg',
    'resources/chuck-img/chuck2.jpg',
    'resources/chuck-img/chuck3.jpg',
    'resources/chuck-img/chuck4.jpg',
    'resources/chuck-img/chuck5.jpg',
    'resources/chuck-img/chuck6.jpg',
    'resources/chuck-img/chuck7.jpg',
    'resources/chuck-img/chuck8.jpg',
    'resources/chuck-img/chuck9.jpg',
    'resources/chuck-img/chuck10.jpg',
    'resources/chuck-img/chuck11.jpg'
  ];

  // Funcion para cargar una imagen aleatoria
  function loadRandomImage() {
    // Obtener un indice aleatorio de la matriz
    const randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Obtener el elemento de imagen por su ID
    const imageElement = document.getElementById('randomImage');

    // Cambiar la imagen aleatoriamente
    imageElement.src = imageUrls[randomIndex];
  }