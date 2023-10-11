// Selecione o formulário pelo ID
const form = document.getElementById('analyze-form');

console.log(form)
// Adicione um ouvinte de evento 'click' ao botão de enviar
form.querySelector('.btn').addEventListener('click', function(event) {
    // Previna o comportamento padrão do botão
    event.preventDefault();

    // Verifique se os campos obrigatórios estão preenchidos
    if (!form.user_name.value || !form.user_email.value || !form.fungi_id.value) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Crie um objeto JSON com os valores dos campos do formulário
    let jsonObject = {
        "user_name": form.user_name.value,
        "user_email": form.user_email.value,
        "fungi_id": form.fungi_id.value
    };

    // Envie os dados do formulário para a API usando fetch
    fetch('http://127.0.0.1:5000/analyze', {  // Corrija o erro no URL aqui
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObject),
    })
    .then(response => response.json())
    .then(data => {
        // Manipule a resposta da API aqui (por exemplo, exiba uma mensagem de sucesso)
        console.log(data);
        alert('Formulário enviado com sucesso!');
    })
    .catch((error) => {
        // Manipule erros (por exemplo, exiba uma mensagem de erro)
        console.error('Error:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});



// const searchBox = document.getElementById('search-box');

// function searchFungi() {
//     var searchTerm = searchBox.value;
//     var url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=taxonomy&term=" + searchTerm + "&retmode=json";
//     var proxyUrl = "https://cors-anywhere.herokuapp.com/";

//     fetch(proxyUrl + url)
//     .then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             return response.text();
//         }
//     })
//     .then(data => {
//         if (typeof data === 'string') {
//             console.error('Erro:', data);
//         } else {
//             var dataList = document.getElementById('fungi-options');
//         // Segundo, você precisa limpar a lista de opções anteriores
//         dataList.innerHTML = "";
//         // Terceiro, você precisa iterar pelos ids das espécies retornadas pela API
//         for (var id of data.esearchresult.idlist) {
//             // Quarto, você precisa fazer outra requisição para obter o nome da espécie pelo seu id
//             var url2 = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=taxonomy&id=" + id + "&retmode=json";
//             fetch(url2)
//             .then(response2 => response2.json())
//             .then(data2 => {
//                 // Quinto, você precisa criar um elemento <option> com o nome da espécie e adicioná-lo à lista
//                 var option = document.createElement('option');
//                 option.value = data2.result[id].scientificname;
//                 dataList.appendChild(option);
//             })
//             .catch(error2 => console.error('Erro:', error2));
//         }
//         }
//     })
//     .catch(error => console.error('Erro:', error));
// }



// searchBox.addEventListener('input', function() {
//     searchFungall();
// });