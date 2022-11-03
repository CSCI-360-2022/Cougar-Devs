import static org.junit.Assert.assertEquals;

import org.junit.*;

public class UserTest {
    
    static User aUser = new User();

    @BeforeClass
    public static void setupUser() {
        aUser.setuserID("New_Username");
        aUser.setPassword("New_Password");
    }

    @Test
    public void testGetUserID(){
        String expected = "New_Username";
        String actual = aUser.getuserID();

        assertEquals(expected, actual);
    }

    @Test
    public void testGetPassword() {
            // Expected Variable, Actual Variable, Compare
        String expected = "New_Password";
        String actual = aUser.getPassword();

        assertEquals(expected, actual);
    }
    
}