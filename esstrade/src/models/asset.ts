export class Asset {

    /**
     * Attributes
     */
    private Id: Number;
    private Acronym: Text;
    private Name: Text;
    private Value: Number;
    private BuyPrice: Number;
    private SellPrice: Number;

    /**
     * 
     * @param Id Id of the asset 
     * @param Acronym Acronym identifying the asset
     * @param Name Name of the Asset 
     * @param Value Monetary value of the asset
     * @param BuyPrice Buy price of the asset
     * @param SellPrice Sell price of the asset
     */
    constructor(Id: Number, Acronym: Text, Name: Text, Value: Number, BuyPrice: Number, SellPrice: Number) {
        this.Id = Id;
        this.Acronym = Acronym;
        this.Name = Name;
        this.Value = Value;
        this.BuyPrice = BuyPrice;
        this.SellPrice = SellPrice;
    }

    /**
     * Methods
     */

    public getId(): Number {
        return this.Id;
    }

    public setId(Id: Number): void {
        this.Id = Id;
    }

    public getAcronym(): Text {
        return this.Acronym;
    }

    public setAcronym(Acronym: Text): void {
        this.Acronym = Acronym;
    }

    public getName(): Text {
        return this.Name;
    }

    public setName(Name: Text): void {
        this.Name = Name;
    }

    public getValue(): Number {
        return this.Value;
    }

    public setValue(Value: Number): void {
        this.Value = Value;
    }

    public getBuyPrice(): Number {
        return this.BuyPrice;
    }

    public setBuyPrice(BuyPrice: Number): void {
        this.BuyPrice = BuyPrice;
    }

    public getSellPrice(): Number {
        return this.SellPrice;
    }

    public setSellPrice(SellPrice: Number): void {
        this.SellPrice = SellPrice;
    }
}