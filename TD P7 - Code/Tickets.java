public class Tickets {

    private double price;
    private int number;
  

    public Tickets (){

        double price = 0;
        int Number = 0;
      
    }
    
    public Tickets (double ticketPrince , int ticketNumber ){

        double price = ticketPrince;
        int tNumber = ticketNumber;
      
    }
    
    // Setters //
    public void setPrice(double price) {
        this.price = price;
    }
  
    //setter 
    public void setNumber(int number) {
        this.number = number;
    }

    //getter method
    public double getPrice() {
        return this.price;
    }
  
    //getter method
    public int getNumber() {
        return this.number;
    }

    //toStringMethod 
    public String toString(){
        return ("This ticket Object Name"  + this.number + " Ticket Price: " + this.price);
    }

    //

    public static boolean testCase1(Tickets ticket) {
        if (ticket.getPrice() <= 10) {
            return false;
        }
        return true;
    }

    public static boolean testCase2(Tickets numOfTickets){
        if(numOfTickets.getNumber() == 0){
            return false;
        }
        return true;
    }

    public static void main(String[] args) {

        Tickets a = new Tickets();
        a.setPrice(11);
        a.setNumber(0);
        System.out.println(a.toString());
        Tickets b = new Tickets();
        b.setPrice(10);
        b.setNumber(2);
        b.toString();
        Tickets c = new Tickets();
        c.setPrice(10);
        c.setNumber(2);
        c.toString();
        System.out.println(testCase1(a));
        System.out.println(testCase2(a));

        
    }
}

// ToString
// Constructors
// Database - Implementation
// Frontend - Implementation
// Test Cases to get it running
