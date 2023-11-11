package br.bellifish.loja.application.interfaces;

import br.bellifish.loja.application.dtos.LoginDTO;
import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import br.bellifish.loja.domain.model.payload.LoginMessage;

public interface IUsuarioService {

    UsuarioDTORequest criarUsuario(UsuarioDTORequest usuarioDTO);
    UsuarioDTO buscarUsuarioPorId(Long usuarioId);

    LoginMessage login(LoginDTO loginDTO);
}
