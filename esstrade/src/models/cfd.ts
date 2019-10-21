import { User } from "./user";
import { Asset } from "./asset";

export class CFD {

    /**
    * Attributes
    */
    private Id: Number;
    private Asset: Asset;
    private User: User;
    private Amount: Number;
    private TakeProfit: Number;
    private StopLoss: Number;
    private StartDate: Date;
    private EndDate: Date;
    private Closed: Boolean;
    
    /**
     * 
     * @param Id Id of the user 
     * @param Asset Asset the CFD is linked to
     * @param User User the CFD was created by
     * @param Amount Amount of units in the CFD
     * @param TakeProfit Amount set to end the CFD when profitting
     * @param StopLoss Amount set to stop the CFD when losing
     * @param StartDate Date the CFD was created
     * @param EndDate Date the CFD was ended
     * @param Closed Flag that indicates the CFD is closed
     */
    constructor(Id: Number, Asset: Asset, User: User, Amount: Number, TakeProfit: Number, StopLoss: Number, StartDate: Date, EndDate: Date, Closed: Boolean) {
        this.Id = Id;
        this.Asset = Asset;
        this.User = User;
        this.Amount = Amount;
        this.TakeProfit = TakeProfit;
        this.StopLoss = StopLoss;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Closed= Closed;
    }

    /**
     * Methods
     */

}