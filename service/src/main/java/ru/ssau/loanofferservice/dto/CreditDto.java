package ru.ssau.loanofferservice.dto;

import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreditDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 4485462916194214178L;

    private UUID id;
    private BigDecimal limitation;
    private BigDecimal rate;
    private Long deadline;

}
