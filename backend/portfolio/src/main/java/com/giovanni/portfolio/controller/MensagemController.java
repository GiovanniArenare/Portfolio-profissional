package com.giovanni.portfolio.controller;

import com.giovanni.portfolio.model.Mensagem;
import com.giovanni.portfolio.repository.MensagemRepository;
import com.giovanni.portfolio.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://portfolio-profissional-kv0plohn3-arenare.vercel.app",
    "https://portfolio-profissional-brown.vercel.app"
})
@RequestMapping("/api/mensagens")
public class MensagemController {

    private final MensagemRepository mensagemRepository;
    private final EmailService emailService;

    public MensagemController(
            MensagemRepository mensagemRepository,
            EmailService emailService) {
        this.mensagemRepository = mensagemRepository;
        this.emailService = emailService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mensagem criar(@Valid @RequestBody Mensagem mensagem) {
        Mensagem mensagemSalva =
                mensagemRepository.save(mensagem);

        try {
            emailService.enviarNotificacao(mensagemSalva);
        } catch (Exception e) {
            System.err.println(
                "Não foi possível enviar o e-mail: "
                + e.getMessage()
            );
        }

        return mensagemSalva;
    }
}