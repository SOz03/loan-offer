package ru.ssau.loanofferservice.dto.enums;

import ru.ssau.loanofferservice.controller.AuthenticationController;
import ru.ssau.loanofferservice.controller.BankController;

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
    public static final String API_BANK = "/bank";

    public static final String[] AUTH_WHITELIST = {
            API_AUTHENTICATION + "/**"
    };
}
