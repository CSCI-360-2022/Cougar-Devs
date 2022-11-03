import static org.junit.Assert.assertEquals;

import org.junit.*;
import org.junit.runners.Parameterized.BeforeParam;

public class BasketTest {
    static Basket aBasket = new Basket();

    @BeforeClass
    public static void setUpClass(){
        aBasket.setNumOfTickets(5);
        aBasket.settnumCard("123456789");
    }

    @Test
    public void testGetNumCard(){
        String expected = "123456789";
        String actual = aBasket.getnumCard();

        assertEquals(expected, actual);
    }

    @Test
    public void testGetNumOfTickets(){
        int expected = 5;
        int actual = aBasket.getNumOfTickets();

        assertEquals(expected, actual);
    }
}
