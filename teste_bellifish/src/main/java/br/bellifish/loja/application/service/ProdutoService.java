package br.bellifish.loja.application.service;

import br.bellifish.loja.application.dtos.ProdutoDTO;
import br.bellifish.loja.application.interfaces.IProdutoService;
import br.bellifish.loja.domain.model.produto.Produto;
import br.bellifish.loja.domain.repository.IProdutoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService implements IProdutoService {
    private final IProdutoRepository _produtoRepository;
    private final ModelMapper _modelMapper;

    public ProdutoService(IProdutoRepository produtoRepository, ModelMapper modelMapper) {
        _produtoRepository = produtoRepository;
        _modelMapper = modelMapper;
    }

    @Override
    public ProdutoDTO criarProduto(ProdutoDTO produtoDTO) {
        Produto produto = _modelMapper.map(produtoDTO, Produto.class);
        return _modelMapper.map(_produtoRepository.save(produto), ProdutoDTO.class);
    }
}
