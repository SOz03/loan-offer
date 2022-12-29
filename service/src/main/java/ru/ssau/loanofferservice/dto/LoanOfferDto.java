package ru.ssau.loanofferservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanOfferDto implements Serializable {

    @Serial
    private static final long serialVersionUID = -1751253774965805138L;

    private UUID id;
    private UserDto user;
    private CreditDto credit;
    private BankDto bank;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private BigDecimal loanAmount;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<PaymentScheduleDto> paymentSchedules;
}
