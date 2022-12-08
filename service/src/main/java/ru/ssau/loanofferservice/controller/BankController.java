package ru.ssau.loanofferservice.controller;

import com.google.gson.Gson;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.ssau.loanofferservice.dto.BankDto;
import ru.ssau.loanofferservice.dto.response.ApiResponse;
import ru.ssau.loanofferservice.security.config.principal.UserDetailsImpl;
import ru.ssau.loanofferservice.service.impl.BankService;

import java.util.UUID;

import static ru.ssau.loanofferservice.dto.enums.ApiPaths.API_BANK;

@Slf4j
@RestController
@RequiredArgsConstructor
@Tag(name = "Информация о банках")
@RequestMapping(path = API_BANK)
@PreAuthorize("authentication.isAuthenticated()")
public class BankController {

    private final Gson gson;
    private final BankService bankService;

    @GetMapping(path = "/filter")
    public ResponseEntity<?> filter(@RequestParam("name") @Nullable String bankName,
                                    Authentication authentication) {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        log.info("Request for filter banks accepted");
        ApiResponse response;
        if (StringUtils.isBlank(bankName)) {
            response = bankService.select(principal);
        } else {
            response = bankService.filter(bankName, principal);
        }

        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> get(@PathVariable UUID id, Authentication authentication) {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        log.info("Request for get bank accepted");

        ApiResponse content = bankService.get(id);

        return ResponseEntity.ok()
                .body(content);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> create(@RequestBody BankDto dto,
                                    Authentication authentication) {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        log.info("Request for create bank accepted");

        ApiResponse content = bankService.create(dto, principal);

        return ResponseEntity.ok()
                .body(content);
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> update(UUID updatedEntityId, @RequestBody BankDto updateDto,
                                    Authentication authentication) {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        log.info("Request for update bank accepted");

        ApiResponse content = bankService.update(updatedEntityId, updateDto, principal);

        return ResponseEntity.ok()
                .body(content);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable UUID id,
                                    Authentication authentication) {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        log.info("Request for delete bank accepted");

        bankService.delete(id, principal.getId());

        return ResponseEntity.ok().build();
    }

}
