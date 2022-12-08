package ru.ssau.loanofferservice.dto.response;

public enum Errors {

    PARAM_IS_EMPTY,

    PASSWORD_IS_NULL,
    USERNAME_IS_NULL,
    EMAIL_IS_NULL,
    INVALID_LOGIN_OR_EMAIL,

    BANK_NAME_IS_EMPTY,
    BANK_IS_EMPTY,
    BANK_NOT_FOUND,

    CREDIT_NOT_FOUND,
    LOAN_OFFER_NOT_FOUND,
    PAYMENT_SCHEDULE_NOT_FOUND
}
