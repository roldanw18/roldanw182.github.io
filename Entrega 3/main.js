const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(URL)
  .then(res => res.json())
  .then(data => {
	const img = document.querySelector('img');
    img.src = data['sprites']['front_shiny']
   console.log(data['sprites']['front_shiny']);
  })
;
