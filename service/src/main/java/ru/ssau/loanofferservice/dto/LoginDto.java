package ru.ssau.loanofferservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import ru.ssau.loanofferservice.dto.enums.Role;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class LoginDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 6142211678507815546L;

    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Role role;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String token;

    public LoginDto(String username, Role role, String token) {
        this.username = username;
        this.role = role;
        this.token = token;
    }

}
