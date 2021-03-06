import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm";
import { CFD } from "./cfd";

@Entity("User")
export class User {

    /**
     * Attributes
     */
    @PrimaryGeneratedColumn()
    private Id: number;

    @Column({ name: "Username" })
    private Username: string;

    @Column({ name: "Password" })
    private Password: string;

    @Column({ name: "Email" })
    private Email: string;

    @Column({ name: "Name" })
    private Name: string;

    @Column({ name: "Gender" })
    private Gender: string;

    @Column({ name: "Birthdate" })
    private Birthdate: Date;

    @Column({ name: "Balance" })
    private Balance: number;

    @Column({ name: "TotalAllocated" })
    private TotalAllocated: number;

    @Column({ name: "Profit" })
    private Profit: number;

    @Column({ name: "Capital" })
    private Capital: number;

    //@OneToMany(() => CFD, cfd => cfd.GetUser())
    //@JoinTable()
    private CFDs: CFD[];

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
    constructor(Id: number, Username: string, Password: string, Email: string, Name: string, Gender: string, Birthdate: Date, Balance: number, TotalAllocated: number, Profit: number, Capital: number, CFDs: Array<CFD>) {
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
        this.CFDs = CFDs;
    }

    /**
     * Methods
     */

    public GetUserDetails(): object {
        return {
            Username: this.Username,
            Email: this.Email,
            Name: this.Name,
            Balance: this.Balance,
            TotalAllocated: this.TotalAllocated,
            Profit: this.Profit,
            Capital: this.Capital,
            CFDs: this.CFDs
        };
    }

}