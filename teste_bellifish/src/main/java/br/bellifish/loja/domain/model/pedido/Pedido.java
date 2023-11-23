package br.bellifish.loja.domain.model.pedido;

import br.bellifish.loja.domain.model.produto.Produto;
import br.bellifish.loja.domain.model.user.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String usuarioCpf;
    private Long produtoId;
    private LocalTime horarioPedido;
}
