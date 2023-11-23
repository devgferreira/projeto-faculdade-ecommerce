package br.bellifish.loja.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCodes {

    CLIENTE_JA_EXISTE("Cliente já existe");
    private final String message;

}