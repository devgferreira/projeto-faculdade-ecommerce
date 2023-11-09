package br.bellifish.loja.domain.model.user.response;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import lombok.Data;

@Data
public class UsuarioResponse {
    private String nome;
    private String cpf;
    private Long telefone;

    public UsuarioResponse(UsuarioDTO usuarioDTO) {
        nome = usuarioDTO.getNome();
        cpf = usuarioDTO.getCpf();
        telefone = usuarioDTO.getTelefone();
    }
}
