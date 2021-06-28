axios.get('https://restcountries.eu/rest/v2/all')
  .then((response) => {
    console.log(response.data)

    // borrar el loading
    document.querySelector('p').remove()

    // crear un ul
    const list = document.createElement('ul')
    document.body.append(list)

    // crear un li con el nombre de cada pais
    response.data.forEach(country => {
      const item = document.createElement('li')
      item.textContent = country.name;

      list.append(item)
    })
  })
  .catch(e => console.error(e))