class Account {
    name: String;
    email: String;
    address: Array<Address>;
    phoneNumber: Number;
    userName: String;
    passWord: String;
    accountStatus: AccountStatus;
}

class Guest {
	guestID: Number;
	searchService: SearchService;

	public createNewAccount(): Account {};
}

class Customer extends Guest {
	account: Account;
	cartService: CartService;
	orderList: Array<HistoricalOrder>;

	public rateProduct(product: Product, rating: Number): void {};
	public reviewProduct(product: Product, review: Review): void {};
	public getHistoricalOrders(): Array<HistoricalOrder> {};
	public trackOrder(orderID: Number): Order {};
}

class Admin extends Customer {
	public addProduct(product: Product): void {};
	public editProduct(product: Product): void {};
	public removeProduct(product: Product): void {};
	public updateProduct(product: Product): void {};
	public addTag(product: Product): void {};
}

class Address {
	buildingNumber: Number;
	streetName: String;
	pinCode: Number;
	landMark: String;
}

class Attachment {
	attachmentID: Number;
	atachmentType: AttachmentType;
}

class Review {
	reviewID: Number;
	reviewText: String;
	attachmentList: Array<Attachment>;
}

class Product {
	productID: Number;
	rating: Number;
	name: String;
	description: String;
	reviewList: Array<Review>;
	price: Number;
	productCategory: ProductCategory;
	tag: Array<String>;
}

class Order {
	orderID: Number;
	orderAmount: Number;
	productList: Array<Product>;
	address: Address;
}

class HistoricalOrder {
	orderStaus: OrderStatus;
	paymentStatus: PaymentStatus;
	paymentType: PaymentType;
}

class SearchService {
	public getProductsByName(name: String): Array<Product> {};
	public getProductsByCategory(category: ProductCategory): Array<Product> {};
	public getProductsByTags(tagString: String): Array<Product> {};
	public getProductsByPriceRange(micPrice: Number, maxPrice: Number): Array<Product> {};
}

class CartService {
	cartProducts: Array<Product>;
	cartValue: Number;

	public addProductToCart(product: Product): void {};
	public removeProductFromCart(product: Product): void {};
	public clearCart(): void {};
	public checkout(order: Order, paymentType: PaymentType): HistoricalOrder {};
}

class Mobile extends Product {
	productCategory: ProductCategory.MOBILE;
	display: String;
	camera: String;
	processor: String;
	/*
	Add more properties as required.	
	*/
}

class Shirt extends Product {
	productCategory: ProductCategory.SHIRT;
	size: String;
	type: String;
	/*
	Add more properties as required.	
	*/
}

// You can create mutiple products like this 

enum ProductCategory {
	MOBILE,
	SHIRT,
	APPLIANCE,
	COMPUTER,
	/*
	Add more properties as required.	
	*/
}

enum OrderStatus {
	PRCOESSING,
	ON_THE_WAY,
	FULFILLED,
	DELIVERED
}

enum AttachmentType {
	IMAGE,
	VIDEO,
	GIF
}

enum PaymentType {
	COD,
	DEBIT_CARD,
	CREDIT_CARD,
	EMI
}

enum PaymentStatus {
	PENDING,
	DECLINED,
	COMPLETED
}

enum AccountStatus {
    ACTIVE,
    SUSPENDED,
    BANNED,
    BLOCKED
}
