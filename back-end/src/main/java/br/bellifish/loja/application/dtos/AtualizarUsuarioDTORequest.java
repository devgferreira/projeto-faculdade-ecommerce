package br.bellifish.loja.application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtualizarUsuarioDTORequest {
    private String nome;
    private Long telefone;
    private String email;
    private String endereco;

}
