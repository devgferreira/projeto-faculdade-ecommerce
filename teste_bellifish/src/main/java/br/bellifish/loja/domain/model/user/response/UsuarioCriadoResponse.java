package br.bellifish.loja.domain.model.user.response;

import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioCriadoResponse {
    private String nome;
    private String cpf;
    private Long telefone;
    private String endereco;

    public UsuarioCriadoResponse(UsuarioDTORequest usuario) {
        nome = usuario.getNome();
        cpf = usuario.getCpf();
        telefone = usuario.getTelefone();
        endereco = usuario.getEndereco();
    }
}