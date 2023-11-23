package br.bellifish.loja.domain.model.produto.response;

import br.bellifish.loja.application.dtos.ProdutoDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoResponse {
    private String nome;
    private Double preco;
    private Long quantidade;

    public ProdutoResponse(ProdutoDTO produto) {
        nome = produto.getNome();
        preco = produto.getPreco();
        quantidade = produto.getQuantidade();
    }
}
