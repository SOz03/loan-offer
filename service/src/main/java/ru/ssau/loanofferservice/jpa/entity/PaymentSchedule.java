package ru.ssau.loanofferservice.jpa.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;
import ru.ssau.loanofferservice.common.dao.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Where(clause = "deleted_by is null")
@Table(name = "tr_payment_schedules", schema = "data")
public class PaymentSchedule extends BaseEntity {

    private LocalDate datePayment;
    private BigDecimal amount;
    private BigDecimal body;
    private BigDecimal interest;

    @ManyToOne
    @JoinColumn(name = "loan_offer_id")
    private LoanOffer loanOffer;

}
