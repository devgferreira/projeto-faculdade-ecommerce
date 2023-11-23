package br.bellifish.loja.domain.model.user.response;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuscarUsuarioPorCpfResponse {
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String aniversario;
    private String endereco;
    private Long telefone;

    public BuscarUsuarioPorCpfResponse(UsuarioDTO usuario) {
        id = usuario.getId();
        nome = usuario.getNome();
        cpf = usuario.getCpf();
        telefone = usuario.getTelefone();
        endereco = usuario.getEndereco();
        email = usuario.getEmail();
        aniversario = usuario.getAniversario();

    }
}
