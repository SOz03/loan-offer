package ru.ssau.loanofferservice.service.impl;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import ru.ssau.loanofferservice.LoanOfferApplication;
import ru.ssau.loanofferservice.dto.CreditDto;
import ru.ssau.loanofferservice.jpa.dao.CreditDaoService;
import ru.ssau.loanofferservice.security.config.principal.UserDetailsImpl;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = LoanOfferApplication.class)
class CreditServiceTest {

//    @Test
//    void select() throws SQLException {
//        Gson gson =new Gson();
//        ModelMapper mapper = mock(ModelMapper.class);
//        CreditDaoService daoService = mock(CreditDaoService.class);
//        DataSource dataSource = mock(DataSource.class);
//        Connection connection = mock(Connection.class);
//        PreparedStatement preparedStatement = mock(PreparedStatement.class);
//        UserDetailsImpl principal = mock(UserDetailsImpl.class);
//
//        when(dataSource.getConnection()).thenReturn(connection);
//        when(connection.prepareStatement("select * from tr_credits")).thenReturn(preparedStatement);
//
//        ResultSet resultQuery = mock(ResultSet.class);
//        when(resultQuery.next())
//                .thenReturn(true).thenReturn(false);
//        when(resultQuery.getBigDecimal("limitation"))
//                .thenReturn(BigDecimal.valueOf(1_000_000L))
//                .thenThrow(SQLException.class);
//        when(resultQuery.getBigDecimal("rate"))
//                .thenReturn(BigDecimal.valueOf(5.00))
//                .thenThrow(SQLException.class);
//        when(resultQuery.getLong("deadline"))
//                .thenReturn(24L)
//                .thenThrow(SQLException.class);
//        when(preparedStatement.executeQuery())
//                .thenReturn(resultQuery);
//
//        CreditService creditService = new CreditService(gson, mapper, daoService);
//        List<CreditDto> content = creditService.select(principal);
//        assertEquals(1, content.size());
//        assertEquals(1_000_000L, content.get(0).getLimitation().longValue());
//        assertEquals(5.00, content.get(0).getRate().doubleValue());
//        assertEquals(24L, content.get(0).getDeadline());
//    }


    @Test
    void create() {
    }
}