package com.giovanni.portfolio.controller;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/wakatime")
public class WakaTimeController {

    private final RestClient restClient;

    public WakaTimeController(RestClient.Builder builder) {
        this.restClient = builder.build();
    }

    @GetMapping
    public JsonNode buscarEstatisticas() {
        return restClient.get()
                .uri("https://wakatime.com/api/v1/users/"
                        + "782aa992-c7ba-4ff2-8e6e-3d0ce6762442"
                        + "/stats/all_time")
                .retrieve()
                .body(JsonNode.class);
    }
}
