package com.devSenai.usuarios.service;

import com.devSenai.usuarios.model.Usuario;
import com.devSenai.usuarios.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    // CREATE - salvar usuário no banco
    public Usuario salvar(Usuario usuario) {
        return repository.save(usuario);
    }

    // READ - listar todos usuários
    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    // READ - buscar usuário por ID
    public Usuario buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    // UPDATE - atualizar usuário
    public Usuario atualizar(Long id, Usuario dados) {
        Usuario usuario = repository.findById(id).orElse(null);

        if (usuario == null) {
            return null; // se não existir, retorna null
        }

        // atualiza todos os campos
        usuario.setNome(dados.getNome());
        usuario.setEmail(dados.getEmail());
        usuario.setSenha(dados.getSenha());
        usuario.setPerfil(dados.getPerfil());
        usuario.setEndereco(dados.getEndereco());
        usuario.setBairro(dados.getBairro());
        usuario.setComplemento(dados.getComplemento());
        usuario.setCep(dados.getCep());
        usuario.setCidade(dados.getCidade());
        usuario.setEstado(dados.getEstado());

        return repository.save(usuario);
    }

    // DELETE - deletar usuário
    public boolean deletar(Long id) {
        if (!repository.existsById(id)) {
            return false; // não existe, retorna false
        }
        repository.deleteById(id);
        return true; // deletado com sucesso
    }
}
