package br.bellifish.loja.apresentation;

import br.bellifish.loja.application.dtos.UsuarioDTO;
import br.bellifish.loja.application.dtos.UsuarioDTORequest;
import br.bellifish.loja.application.interfaces.IUsuarioService;
import br.bellifish.loja.domain.model.user.response.BuscarUsuarioPorIdResponse;
import br.bellifish.loja.domain.model.user.response.UsuarioCriadoResponse;
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
    public ResponseEntity<UsuarioCriadoResponse> criarUsuario(@RequestBody UsuarioDTORequest usuarioDTORequest){
        UsuarioDTORequest usuario = _usuarioInterface.criarUsuario(usuarioDTORequest);
        UsuarioCriadoResponse usuarioResponse = new UsuarioCriadoResponse(usuario);
        return new ResponseEntity<>(usuarioResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{usuarioId}")
    ResponseEntity<BuscarUsuarioPorIdResponse> buscarUsuarioPorId(@PathVariable Long usuarioId){
        UsuarioDTO usuarioDTO = _usuarioInterface.buscarUsuarioPorId(usuarioId);
        BuscarUsuarioPorIdResponse usuarioResponse = new BuscarUsuarioPorIdResponse(usuarioDTO);
        return ResponseEntity.ok(usuarioResponse);
    }
}
