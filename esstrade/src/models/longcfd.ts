import { CFD } from "./cfd";
import { Asset } from "./asset";
import { User } from "./user";

export class LongCFD extends CFD {

    private BuyPrice: Number;

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
     * @param BuyPrice Price that was set per unit of the asset at the start of the CFD
     */
    constructor(Id: Number, Asset: Asset, User: User, Amount: Number, TakeProfit: Number, StopLoss: Number, StartDate: Date, EndDate: Date, Closed: Boolean, BuyPrice: Number) {
        super(Id, Asset, User, Amount, TakeProfit, StopLoss, StartDate, EndDate, Closed);
        this.BuyPrice = BuyPrice;
    }

    /**
     * Methods
     */

}