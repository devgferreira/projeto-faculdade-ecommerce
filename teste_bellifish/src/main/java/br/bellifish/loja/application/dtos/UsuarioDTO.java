package br.bellifish.loja.application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    private Long id;
    private String nome;
    private String cpf;
    private String endereco;
    private String aniversario;
    private Long telefone;
    private String senha;


}