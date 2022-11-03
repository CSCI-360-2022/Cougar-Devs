public class User {
    private String password;
    private String userID;
    
    public User() {
        password = null;
        userID = null;
    }

    public User(String a, String b) {
        userID = a;
        password = b;
    }

    // Getters //
    void setuserID(String uID) {
        this.userID = uID;
    }
    
    String getuserID() { 
        return this.userID;
    }

    // Setters //
    
    void setPassword(String pass) {
        this.password = pass;

    }
    String getPassword() { 
        return this.password;
    }

    public String toString() {
        return "=== User Information === \nUserID: "+this.userID +" \nPassword: "+ this.password + "\n";
    }
   
    public static void main(String[] args) {
        // TEST ONE //
        User a = new User();
        System.out.print(a.toString());
        // TEST TWO //
        User b = new User("null", "pass");
        System.out.print(b.toString());
        // TEST THREE //
        User c = new User("Clear1", "");
        System.out.print(c.toString());
        
        // EXTRA TESTS - GETTERS/SETTERS //

    }

}