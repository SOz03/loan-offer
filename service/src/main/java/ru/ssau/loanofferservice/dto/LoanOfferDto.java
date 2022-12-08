package ru.ssau.loanofferservice.dto;

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
    private BigDecimal loanAmount;
    private UserDto userId;
    private CreditDto credit;
    private BankDto bank;

    private List<PaymentScheduleDto> paymentSchedules;
}
