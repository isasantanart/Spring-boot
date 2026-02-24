const form = document.getElementById('usuarioForm');
const urlParams = new URLSearchParams(window.location.search);
const usuarioId = urlParams.get('id');
const API_URL = 'http://localhost:8080/usuarios';

// Se tiver id na URL, busca dados para edição
if (usuarioId) {
    fetch(`${API_URL}/${usuarioId}`)
        .then(res => res.json())
        .then(usuario => {
            document.getElementById('nome').value = usuario.nome;
            document.getElementById('email').value = usuario.email;
            document.getElementById('senha').value = usuario.senha;
            document.getElementById('perfil').value = usuario.perfil;
            document.getElementById('endereco').value = usuario.endereco || '';
            document.getElementById('bairro').value = usuario.bairro || '';
            document.getElementById('complemento').value = usuario.complemento || '';
            document.getElementById('cep').value = usuario.cep || '';
            document.getElementById('cidade').value = usuario.cidade || '';
            document.getElementById('estado').value = usuario.estado || '';
        });
}

// Envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        senha: document.getElementById('senha').value,
        perfil: document.getElementById('perfil').value,
        endereco: document.getElementById('endereco').value.trim(),
        bairro: document.getElementById('bairro').value.trim(),
        complemento: document.getElementById('complemento').value.trim(),
        cep: document.getElementById('cep').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value.trim()
    };

    let url = API_URL;
    let method = 'POST';
    if (usuarioId) {
        url += `/${usuarioId}`;
        method = 'PUT';
    }

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    })
    .then(res => {
        if (!res.ok) throw new Error();
        window.location.href = 'lista.html';
    })
    .catch(() => alert('Erro ao salvar usuário'));
});