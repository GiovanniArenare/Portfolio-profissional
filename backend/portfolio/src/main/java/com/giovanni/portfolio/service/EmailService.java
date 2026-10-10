package com.giovanni.portfolio.service;

import com.giovanni.portfolio.model.Mensagem;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String emailRemetente;

    @Value("${app.mail.destinatario}")
    private String emailDestinatario;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void enviarNotificacao(Mensagem mensagem) {
        SimpleMailMessage email = new SimpleMailMessage();

        email.setFrom(emailRemetente);
        email.setTo(emailDestinatario);
        email.setReplyTo(mensagem.getEmail());

        email.setSubject(
            "Novo contato pelo portfólio: " + mensagem.getAssunto()
        );

        email.setText(
            "Você recebeu uma nova mensagem pelo portfólio.\n\n" +
            "Nome: " + mensagem.getNome() + "\n" +
            "E-mail: " + mensagem.getEmail() + "\n" +
            "Assunto: " + mensagem.getAssunto() + "\n\n" +
            "Mensagem:\n" + mensagem.getConteudo()
        );

        mailSender.send(email);
    }
}
