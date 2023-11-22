package br.bellifish.loja.application.interfaces;

import br.bellifish.loja.application.dtos.AtualizarUsuarioDTORequest;
import br.bellifish.loja.application.dtos.LoginDTO;
import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import br.bellifish.loja.domain.model.payload.LoginMessage;
import br.bellifish.loja.domain.model.user.response.AtualizarUsuarioResponse;

public interface IUsuarioService {

    UsuarioDTORequest criarUsuario(UsuarioDTORequest usuarioDTO);
    AtualizarUsuarioDTORequest atualizarUsuario(String usuarioCpf, AtualizarUsuarioDTORequest usuarioDTORequest);

    UsuarioDTO buscarUsuarioPorCpf(String usuarioCpf);

    LoginMessage login(LoginDTO loginDTO);
}
