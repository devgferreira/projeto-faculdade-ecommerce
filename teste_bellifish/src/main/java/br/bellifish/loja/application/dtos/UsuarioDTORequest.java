package br.bellifish.loja.application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTORequest {
    private String nome;
    private String cpf;
    private Long telefone;
    private String senha;

}
