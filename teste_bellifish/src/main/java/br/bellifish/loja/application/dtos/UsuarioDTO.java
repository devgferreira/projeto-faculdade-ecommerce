package br.bellifish.loja.application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String endereco;
    private String aniversario;
    private Long telefone;
    private String senha;


}
