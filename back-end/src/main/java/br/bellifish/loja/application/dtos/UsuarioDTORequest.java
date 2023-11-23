package br.bellifish.loja.application.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTORequest {
    private String nome;
    private String cpf;
    private String email;
    private String aniversario;
    private Long telefone;
    private String endereco;
    private String senha;
}
