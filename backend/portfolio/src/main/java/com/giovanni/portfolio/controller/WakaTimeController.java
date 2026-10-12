package com.giovanni.portfolio.controller;

import tools.jackson.databind.JsonNode;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/wakatime")
public class WakaTimeController {

    private final RestClient restClient;
    private final String apiKey;

    public WakaTimeController() {
        this.apiKey = System.getenv("WAKATIME_API_KEY");

        this.restClient = RestClient.builder()
                .baseUrl("https://wakatime.com/api/v1")
                .defaultHeader(
                        HttpHeaders.ACCEPT,
                        MediaType.APPLICATION_JSON_VALUE
                )
                .build();
    }

    @GetMapping
    public JsonNode buscarEstatisticas() {
        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException(
                    "A variável WAKATIME_API_KEY não está configurada."
            );
        }

        return restClient.get()
                .uri("/users/782aa992-c7ba-4ff2-8e6e-3d0ce6762442/stats/all_time")
                .headers(headers ->
                        headers.setBasicAuth(apiKey, "")
                )
                .retrieve()
                .body(JsonNode.class);
    }
}
