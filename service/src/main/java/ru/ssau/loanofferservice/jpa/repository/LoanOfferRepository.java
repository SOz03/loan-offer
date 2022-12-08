package ru.ssau.loanofferservice.jpa.repository;

import org.springframework.stereotype.Repository;
import ru.ssau.loanofferservice.common.dao.repository.AbstractRepository;
import ru.ssau.loanofferservice.jpa.entity.LoanOffer;

@Repository
public interface LoanOfferRepository extends AbstractRepository<LoanOffer> {

}
