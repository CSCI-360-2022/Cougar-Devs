import static org.junit.Assert.assertEquals;

import org.junit.*;

public class TicketsTest {
    static Tickets aTicket = new Tickets();

    @BeforeClass
    public static void setUpClass(){
       aTicket.setPrice(25.00);
       aTicket.setNumber(50);
    }

    @Test
    public void testGetPrice(){
       double expected = 25.00;
       double actual = aTicket.getPrice();

       assertEquals(expected, actual, 0);
    }

    @Test
    public void testGetNumber(){
        int expected = 50;
        int actual = aTicket.getNumber();

        assertEquals(expected, actual);       
    }
}
