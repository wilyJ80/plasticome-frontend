const searchBox = document.getElementById('search-box');

function searchFungi() {
    var searchTerm = searchBox.value;
    var url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=taxonomy&term=" + searchTerm + "&retmode=json";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyUrl + url)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            return response.text();
        }
    })
    .then(data => {
        if (typeof data === 'string') {
            console.error('Erro:', data);
        } else {
            var dataList = document.getElementById('fungi-options');
        // Segundo, você precisa limpar a lista de opções anteriores
        dataList.innerHTML = "";
        // Terceiro, você precisa iterar pelos ids das espécies retornadas pela API
        for (var id of data.esearchresult.idlist) {
            // Quarto, você precisa fazer outra requisição para obter o nome da espécie pelo seu id
            var url2 = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=taxonomy&id=" + id + "&retmode=json";
            fetch(url2)
            .then(response2 => response2.json())
            .then(data2 => {
                // Quinto, você precisa criar um elemento <option> com o nome da espécie e adicioná-lo à lista
                var option = document.createElement('option');
                option.value = data2.result[id].scientificname;
                dataList.appendChild(option);
            })
            .catch(error2 => console.error('Erro:', error2));
        }
        }
    })
    .catch(error => console.error('Erro:', error));
}



searchBox.addEventListener('input', function() {
    searchFungall();
});