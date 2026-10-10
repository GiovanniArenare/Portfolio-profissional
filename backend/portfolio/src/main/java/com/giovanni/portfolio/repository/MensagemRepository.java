package com.giovanni.portfolio.repository;

import com.giovanni.portfolio.model.Mensagem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {
}
