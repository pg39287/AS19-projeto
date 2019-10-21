export class User {

    /**
     * Attributes
     */
    private Id: Number;
    private Username: Text;
    private Password: Text;
    private Email: Text;
    private Name: Text;
    private Gender: Text;
    private Birthdate: Date;
    private Balance: Number;
    private TotalAllocated: Number;
    private Profit: Number;
    private Capital: Number;

    /**
     * 
     * @param Id Id of the user 
     * @param Username Username of the user in the platform
     * @param Password password of the user (this is probably not advised)
     * @param Email Email of the user in the platform
     * @param Name Real name of the user 
     * @param Gender Gender of the user
     * @param Birthdate Birth date of the user
     * @param Balance Money currently in the account
     * @param TotalAllocated Total money allocated in all CFDs
     * @param Profit Total money made from trading CFDs
     * @param Capital Capital value of the user in the platform
     */
    constructor(Id: Number, Username: Text, Password: Text, Email: Text, Name: Text, Gender: Text, Birthdate: Date, Balance: Number, TotalAllocated: Number, Profit: Number, Capital: Number) {
        this.Id = Id;
        this.Username = Username;
        this.Password = Password;
        this.Email = Email;
        this.Name = Name;
        this.Gender = Gender;
        this.Birthdate = Birthdate;
        this.Balance = Balance;
        this.TotalAllocated = TotalAllocated;
        this.Profit = Profit;
        this.Capital = Capital;
    }

    /**
     * Methods
     */

    public getUsername(): Text {
        return this.Username;
    }

}