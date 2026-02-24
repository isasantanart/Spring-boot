package com.devSenai.usuarios;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // desliga proteção CSRF, que atrapalha REST
            .cors(cors -> {})              // libera CORS (deixa pra configurar depois)
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()  // permite TODAS requisições sem login
            );

        return http.build();
    }
}