package br.bellifish.loja.domain.repository;

import br.bellifish.loja.domain.model.user.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByCpf(String cpf);
    Optional<Usuario> findOneByCpfAndSenha(String cpf, String senha);
}
