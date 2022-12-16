package ru.ssau.loanofferservice.dto.enums;

import ru.ssau.loanofferservice.controller.AuthenticationController;
import ru.ssau.loanofferservice.controller.BankController;
import ru.ssau.loanofferservice.controller.CreditController;

public class ApiPaths {

    /**
     * {@link AuthenticationController}
     */
    public static final String API_AUTHENTICATION = "/auth";
    public static final String REGISTRATION = "/registration";
    public static final String LOGIN = "/login";

    /**
     * {@link BankController}
     */
    public static final String API_BANKS = "/banks";

    /**
     * {@link CreditController}
     */
    public static final String API_CREDITS = "/credits";

    public static final String[] AUTH_WHITELIST = {
            API_AUTHENTICATION + "/*",
            "/home"
    };
}
