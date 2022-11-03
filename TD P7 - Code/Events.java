
public class Events {
    private int numTickets;
    private double price;
    public String eventName;
   
    public void setEventName(String name){
        this.eventName = name;
    }
    public void setNumTickets(int ticketsNumber){

        if(ticketsNumber < 0){
            throw new IllegalArgumentException("There can not be negative amount of tickets");
        }
        this.numTickets = ticketsNumber;

        //ticketsNumber should not negative.
    }
  
    public void setPrice(double amount){
        if (amount < 0){
            throw new IllegalArgumentException("Price should be at least $0.00");
        }
            this.price = amount;

        //Price has to be above $0.
    }
  
    public double getPrice(){
        return this.price;
    }
  
    public int getNumTickets(){
        return this.numTickets;
    }

    public String getEventName(){
        return this.eventName;
    }

    public String toString() {
        return "Event: " + this.eventName + "\nTickets available: " + this.numTickets + "\nPrice: $" + this.price;
    }

 public static void main(String[] args){

     //TEST 1 -- Positive Price

     Events event3 = new Events();

     event3.setEventName("Computer Science Career Fair");
     event3.setNumTickets(50);
     event3.setPrice(25);

     System.out.println(event3.toString());

     // TEST 2 -- Positive Amount of Tickets

     Events event4 = new Events();

     event4.setEventName("WIC: Github Workshop");
     event4.setNumTickets(15);
     event4.setPrice(35);

     System.out.println(event4.toString());

    //TEST 3 -- Negative Price
        Events event1 = new Events();

        event1.setEventName("Computer Science Career Fair");
        event1.setNumTickets(30);
        event1.setPrice(-5.35);

    
    //TEST 4 -- Negative Amount of Tickets

        Events event2 = new Events();
        event2.setEventName("WIC: Github Workshop");
        event2.setNumTickets(-4);
        event2.setPrice(0);
       
 }
}