package br.bellifish.loja.domain.model.user.response;

import br.bellifish.loja.application.dtos.AtualizarUsuarioDTORequest;
import br.bellifish.loja.application.dtos.UsuarioDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtualizarUsuarioResponse {
    private String nome;
    private String endereco;
    private String email;
    private Long telefone;

    public AtualizarUsuarioResponse(AtualizarUsuarioDTORequest usuario) {
        nome = usuario.getNome();
        telefone = usuario.getTelefone();
        endereco = usuario.getEndereco();
        email = usuario.getEmail();
    }
}
