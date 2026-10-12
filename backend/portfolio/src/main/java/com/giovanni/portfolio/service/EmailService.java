
package com.giovanni.portfolio.service;

import com.giovanni.portfolio.model.Mensagem;
import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final Resend resend;
    private final String emailDestinatario;

    public EmailService(
            @Value("${RESEND_API_KEY}") String apiKey,
            @Value("${app.mail.destinatario}") String emailDestinatario) {

        this.resend = new Resend(apiKey);
        this.emailDestinatario = emailDestinatario;
    }

    public void enviarNotificacao(Mensagem mensagem) {
        String texto =
                "Você recebeu uma nova mensagem pelo portfólio.\n\n" +
                "Nome: " + mensagem.getNome() + "\n" +
                "E-mail: " + mensagem.getEmail() + "\n" +
                "Assunto: " + mensagem.getAssunto() + "\n\n" +
                "Mensagem:\n" + mensagem.getConteudo();

        CreateEmailOptions email = CreateEmailOptions.builder()
                .from("Portfolio <onboarding@resend.dev>")
                .to(emailDestinatario)
                .replyTo(mensagem.getEmail())
                .subject("Novo contato pelo portfólio: "
                        + mensagem.getAssunto())
                .text(texto)
                .build();

        try {
            var resposta = resend.emails().send(email);
            System.out.println(
                    "E-mail aceito pelo Resend. ID: " + resposta.getId());

        } catch (ResendException e) {
            throw new RuntimeException(
                    "Erro ao enviar e-mail pelo Resend.", e);
        }
    }
}
