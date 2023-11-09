package br.bellifish.loja.application.interfaces;

import br.bellifish.loja.application.dtos.UsuarioDTO;

public interface IUsuarioService {

    UsuarioDTO criarUsuario(UsuarioDTO usuarioDTO);
    UsuarioDTO buscarUsuarioPorId(Long usuarioId);
}
