package br.bellifish.loja.apresentation;

import br.bellifish.loja.application.dtos.LoginDTO;
import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import br.bellifish.loja.application.interfaces.IUsuarioService;
import br.bellifish.loja.domain.model.payload.LoginMessage;
import br.bellifish.loja.domain.model.user.response.BuscarUsuarioPorCpfResponse;
import br.bellifish.loja.domain.model.user.response.UsuarioCriadoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuarios")
public class UsuarioController {
    private final IUsuarioService _usuarioInterface;

    @Autowired
    public UsuarioController(IUsuarioService usuarioInterface) {
        _usuarioInterface = usuarioInterface;
    }

    @PostMapping
    public ResponseEntity<UsuarioCriadoResponse> criarUsuario(@RequestBody UsuarioDTORequest usuarioDTORequest) {
        UsuarioDTORequest usuario = _usuarioInterface.criarUsuario(usuarioDTORequest);
        UsuarioCriadoResponse usuarioResponse = new UsuarioCriadoResponse(usuario);
        return new ResponseEntity<>(usuarioResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{usuarioCpf}")
    ResponseEntity<BuscarUsuarioPorCpfResponse> buscarUsuarioPorCpf(@PathVariable String usuarioCpf) {
        UsuarioDTO usuarioDTO = _usuarioInterface.buscarUsuarioPorCpf(usuarioCpf);
        BuscarUsuarioPorCpfResponse usuarioResponse = new BuscarUsuarioPorCpfResponse(usuarioDTO);
        return ResponseEntity.ok(usuarioResponse);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<LoginMessage> login(@RequestBody LoginDTO loginDTO) {
        LoginMessage loginResponse = _usuarioInterface.login(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
