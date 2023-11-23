package br.bellifish.loja.domain.model.user.response;

import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioCriadoResponse {
    private String nome;
    private String cpf;
    private Long telefone;
    private String email;
    private String aniversario;
    private String endereco;

    public UsuarioCriadoResponse(UsuarioDTORequest usuario) {
        nome = usuario.getNome();
        cpf = usuario.getCpf();
        telefone = usuario.getTelefone();
        endereco = usuario.getEndereco();
        email = usuario.getEmail();
        aniversario = usuario.getAniversario();
    }
}
