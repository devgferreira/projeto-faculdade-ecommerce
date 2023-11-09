package br.bellifish.loja.apresentation;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.interfaces.IUsuarioService;
import br.bellifish.loja.domain.model.user.response.UsuarioResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private final IUsuarioService _usuarioInterface;
    @Autowired
    public UsuarioController(IUsuarioService usuarioInterface) {
        _usuarioInterface = usuarioInterface;
    }

    @PostMapping
    public ResponseEntity<UsuarioResponse> criarUsuario(@RequestBody UsuarioDTO usuario){
        UsuarioDTO usuarioDTO = _usuarioInterface.criarUsuario(usuario);
        UsuarioResponse usuarioResponse = new UsuarioResponse(usuarioDTO);
        return new ResponseEntity<>(usuarioResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{usuarioId}")
    ResponseEntity<UsuarioResponse> buscarUsuarioPorId(@PathVariable Long usuarioId){
        UsuarioDTO usuarioDTO = _usuarioInterface.buscarUsuarioPorId(usuarioId);
        UsuarioResponse usuarioResponse = new UsuarioResponse(usuarioDTO);
        return ResponseEntity.ok(usuarioResponse);
    }
}
