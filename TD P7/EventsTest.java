import static org.junit.Assert.assertEquals;

import org.junit.*;
public class EventsTest {
    static Events anEvent = new Events();

    @BeforeClass
    public static void setUpClass(){
        anEvent.setEventName("WIC");
        anEvent.setNumTickets(5);
        anEvent.setPrice(53.45);
    }

    @Test
    public void testGetPrice(){
       double expected = 53.45;
       double actual = anEvent.getPrice();

       assertEquals(expected, actual, 0);
    }

    @Test
    public void testGetNumTickets(){
        int expected = 5;
        int actual = anEvent.getNumTickets();

        assertEquals(expected, actual);       
    }

    @Test
    public void testGetEventName(){
        String expected = "WIC";
        String actual = anEvent.getEventName();

        assertEquals(expected, actual);

    }
}
