package com.labmanagement;

import com.labmanagement.model.entity.User;
import com.labmanagement.model.enums.Role;
import com.labmanagement.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@SpringBootApplication
@EnableCaching
@EnableAsync
public class LabManagementSystemApplication {

    private static final Logger log = LoggerFactory.getLogger(LabManagementSystemApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(LabManagementSystemApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            String adminEmail = "belcaid.abdellah2001@gmail.com";
            if (userRepository.findByEmailIgnoreCase(adminEmail) == null) {
                User adminUser = User.builder()
                        .email(adminEmail)
                        .role(Role.ADMIN)
                        .Enabled(true)
                        .createTime(LocalDateTime.now())
                        .username("admin")
                        .password(passwordEncoder.encode("admin12345"))
                        .name("belcaid")
                        .build();

                userRepository.save(adminUser);
                log.info("Admin user created. Username: " + adminUser.getUsername() + " - Password: admin12345");
            }
        };
    }
}
