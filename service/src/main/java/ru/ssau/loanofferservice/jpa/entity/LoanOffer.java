package ru.ssau.loanofferservice.jpa.entity;

import lombok.*;
import org.hibernate.annotations.Where;
import ru.ssau.loanofferservice.common.dao.entity.BaseEntity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Where(clause = "deleted_by is null")
@Table(name = "tr_loan_offers", schema = "data")
public class LoanOffer extends BaseEntity {

    private BigDecimal loanAmount;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "credit_id")
    private Credit credit;

    @ManyToOne
    @JoinColumn(name = "bank_id")
    private Bank bank;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<PaymentSchedule> paymentSchedules;

}
