package br.bellifish.loja.infra.exceptions.handler;



import br.bellifish.loja.domain.enums.ErrorCodes;
import br.bellifish.loja.infra.exceptions.ClienteJaExisteExeception;
import br.bellifish.loja.infra.exceptions.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ClienteJaExisteExeception.class)
    public final ResponseEntity<Object> handleClienteJaExisteExeception(ClienteJaExisteExeception ex) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(ErrorCodes.CLIENTE_JA_EXISTE, ex.getMessage());
        return ResponseEntity.status(HttpStatus.OK).body(exceptionResponse);
    }

}
