package br.bellifish.loja.application.service;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.interfaces.IUsuarioService;
import br.bellifish.loja.domain.model.user.Usuario;
import br.bellifish.loja.domain.repository.IUsuarioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService {
    private final IUsuarioRepository _userRepository;
    private final ModelMapper _modelMapper;

    @Autowired
    public UsuarioService(IUsuarioRepository userRepository, ModelMapper modelMapper) {
        _userRepository = userRepository;
        _modelMapper = modelMapper;
    }


    @Override
    public UsuarioDTO criarUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = _modelMapper.map(usuarioDTO, Usuario.class);
        return _modelMapper.map(_userRepository.save(usuario), UsuarioDTO.class);
    }

    @Override
    public UsuarioDTO buscarUsuarioPorId(Long usuarioId) {
        Optional<Usuario> usuario = _userRepository.findById(usuarioId);
        return _modelMapper.map(usuario, UsuarioDTO.class);
    }
}
