export interface ICarInDb {
  pk: string
  price: number
  saleDate: string
  salesManager: string
}

// ui should be in a separate layer, but it's also just a detail, not a part of business logic
export interface ICarUI {
  discountClicked: boolean,
  priceBeforeSale: number
  priceAfterSale: number
  saleDate: Date
  salesManagerName: string
  salesManagerSurname: string
}
