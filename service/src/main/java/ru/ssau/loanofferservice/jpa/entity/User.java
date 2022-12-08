package ru.ssau.loanofferservice.jpa.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.ssau.loanofferservice.common.dao.entity.BaseEntity;
import ru.ssau.loanofferservice.dto.enums.Role;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import java.io.Serial;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tr_users", schema = "data")
public class User extends BaseEntity {

    @Serial
    private static final long serialVersionUID = -2957871233893384863L;

    private String username;
    private String encryptPassword;

    private String fullname;
    private String email;
    private String phone;
    private String city;

    @Enumerated(EnumType.STRING)
    private Role role;

}
