const form = document.getElementById('analyze-form');

console.log(form)
form.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();

    if (!form.user_name.value || !form.user_email.value || !form.fungi_id.value) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    let jsonObject = {
        "user_name": form.user_name.value,
        "user_email": form.user_email.value,
        "fungi_id": form.fungi_id.value
    };

    fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Formulário enviado com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});
