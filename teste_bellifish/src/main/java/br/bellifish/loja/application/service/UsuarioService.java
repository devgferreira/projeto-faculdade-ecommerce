package br.bellifish.loja.application.service;

import br.bellifish.loja.application.dtos.AtualizarUsuarioDTORequest;
import br.bellifish.loja.application.dtos.LoginDTO;
import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import br.bellifish.loja.application.interfaces.IUsuarioService;
import br.bellifish.loja.domain.model.payload.LoginMessage;
import br.bellifish.loja.domain.model.user.Usuario;
import br.bellifish.loja.domain.repository.IUsuarioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService {
    private final IUsuarioRepository _userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper _modelMapper;

    @Autowired
    public UsuarioService(IUsuarioRepository userRepository, PasswordEncoder passwordEncoder, ModelMapper modelMapper) {
        _userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        _modelMapper = modelMapper;
    }


    @Override
    public UsuarioDTORequest criarUsuario(UsuarioDTORequest usuarioDTO) {
        String senha = passwordEncoder.encode(usuarioDTO.getSenha());
        Usuario usuario = _modelMapper.map(usuarioDTO, Usuario.class);
        if(_userRepository.findByCpf(usuarioDTO.getCpf()) != null){
            throw new RuntimeException("Usuario já existe");
        }
        usuario.setSenha(senha);
        return _modelMapper.map(_userRepository.save(usuario), UsuarioDTORequest.class);
    }

    @Override
    public AtualizarUsuarioDTORequest atualizarUsuario(String usuarioCpf, AtualizarUsuarioDTORequest usuarioDTORequest) {
        Usuario usuario = _userRepository.findByCpf(usuarioCpf);
        usuario.setNome(usuarioDTORequest.getNome());
        usuario.setEndereco(usuarioDTORequest.getEndereco());
        usuario.setTelefone(usuarioDTORequest.getTelefone());
        _userRepository.save(usuario);
        return usuarioDTORequest;
    }

    @Override
    public UsuarioDTO buscarUsuarioPorCpf(String usuarioCpf) {
        Usuario usuario = _userRepository.findByCpf(usuarioCpf);
        return _modelMapper.map(usuario, UsuarioDTO.class);
    }

    @Override
    public LoginMessage login(LoginDTO loginDTO) {
        Usuario usuario = _userRepository.findByCpf(loginDTO.getCpf());
        if (usuario != null) {
            String senha = loginDTO.getSenha();
            String senhaCriptografada = usuario.getSenha();
            boolean senhaIgual = passwordEncoder.matches(senha, senhaCriptografada);
            if (senhaIgual) {
                Optional<Usuario> usuario1 = _userRepository.findOneByCpfAndSenha(loginDTO.getCpf(), senhaCriptografada);
                if (usuario1.isPresent()) {
                    return new LoginMessage("Login Sucess", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Senha incorreta", false);
            }
        } else {
            return new LoginMessage("CPF não cadastrado", false);
        }
    }
}
