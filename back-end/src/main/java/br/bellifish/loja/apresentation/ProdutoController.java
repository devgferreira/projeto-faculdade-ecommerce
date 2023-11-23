package br.bellifish.loja.apresentation;

import br.bellifish.loja.application.dtos.ProdutoDTO;
import br.bellifish.loja.application.interfaces.IProdutoService;
import br.bellifish.loja.domain.model.produto.response.ProdutoResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    private final IProdutoService _produtoService;

    public ProdutoController(IProdutoService produtoService) {
        _produtoService = produtoService;
    }


    @PostMapping
    public ResponseEntity<ProdutoResponse> criarProduto(@RequestBody ProdutoDTO produtoDTO) {
        ProdutoDTO produto = _produtoService.criarProduto(produtoDTO);
        ProdutoResponse produtoResponse = new ProdutoResponse(produto);
        return new ResponseEntity<>(produtoResponse, HttpStatus.CREATED);
    }


}
