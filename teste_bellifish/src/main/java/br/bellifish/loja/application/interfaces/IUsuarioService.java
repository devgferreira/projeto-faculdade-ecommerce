package br.bellifish.loja.application.interfaces;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;

public interface IUsuarioService {

    UsuarioDTORequest criarUsuario(UsuarioDTORequest usuarioDTO);
    UsuarioDTO buscarUsuarioPorId(Long usuarioId);
}
