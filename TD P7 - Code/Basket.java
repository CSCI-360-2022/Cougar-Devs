public class Basket {
    private int numberOfTickets;
    private String numCard;

    // Getters //
    public int getNumOfTickets() {
       return  this.numberOfTickets ;
    }

      String getnumCard() {
        return this.numCard ;
    }

    // Setters //
    
    void setNumOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;

    }
    void settnumCard(String numCard) { 
         this.numCard = numCard;
    }

    //toStringMethod
    public String toString() {
        return "Basket Information: \nNumber of Tickets: "+this.numberOfTickets +" \nCard Number: "+ this.numCard;
    }

    //test cases
    public static boolean testCase1(Basket basket) {
        if (basket.getNumOfTickets() <= 0) {
            return false;
        }
        return true;
    }
    
   
    public static void main(String[] args) {
      
        //testCases
        Basket basket = new Basket();
        basket.setNumOfTickets(2);
        basket.settnumCard("123456789");
        System.out.println(basket.getNumOfTickets());
        System.out.println(basket.getnumCard());
        


        System.out.print("This is the Basket Class!");
    }
}

