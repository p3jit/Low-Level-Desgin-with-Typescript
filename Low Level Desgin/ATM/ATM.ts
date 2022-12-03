class Address {
    buildingNumber: Number;
    streetName: String;
    country: String;
    pinCode: Number;
    landMark: String;
}

class ATM {
	address: Address;
	atmID: Number;
	cardReader: CardReader;
	keypad: Keypad;
	screen: ScreenDisplay;
	bankService: BankService;
	cashDispenser: CashDispenser;
}

class CardReader {
	public getCardInfo(): CardInfo {};
}

class Keypad {
	public getInput(): String {};
}

class ScreenDisplay {
	public showDisplay(text: String): void {};
}

class CashDispenser {
	cashInfo: Map<CashType,Cash[]>;

	public getAvailableCash(cashType: CashType): Number {};
	public dispenseCash(amount: Number): void {};
}

class BankService {
	public getCustomerDetails(cardInfo: CardInfo): Customer {};
	public validatePin(cardInfo: CardInfo, pin: Number): Boolean {};
	public processTransaction(transaction: Transaction, customer: Customer): TransactionInfo {};
}

class TransactionInfo {
	transactionID: Number;
	transactionStatus: TransactionStatus;
	TransactionType: TransactionType;
	sourceAccount: Account;
	transactionDate: Date;
}

class Transaction {
	transactioID: Number;
	sourceAccount: Account;
	transactionDate: Date;
	transactionStatus: TransactionStatus;
}

class Withdraw extends Transaction {
	transactionType: TransactionType.WITHDRAW;
	withdrawAmount: Number;
	withdrawCash: Cash[];
}

class DepositCash extends Transaction {
	transactionType: TransactionType.DEPOSIT;
	depositType: DepositType.CASH;
	depositAmount: Number;
	depostCash:  Cash[];
}

class DepostyCheque extends Transaction {
	transactionType: DepositType.CHEQUE;
	cheque: Cheque;
}

class Cheque {
	chequeID: Number;
	chequeAmount: Number;
	signature: String;
}

class Transfer extends Transaction {
	transactionType: TransactionType.TRANSFER;
	transfer: TransferInfo;
}

class TransferInfo {
	transferAmmount: Number;
	transferAccount: Account;
}

class Account {
	accountID: Number;
	firstName: String;
	lastName: String;
	accountNumber: Number;
	accountStatus: AccountStatus;
	availableBalance: Number;
	bank: Bank;
}

class Customer {
	cusotmerID : number;
	account: Account;
	bankService: BankService;
} 

class Cash {
	cashSerialNumber: Number;
	cashType: CashType;
}

class Bank {
	name: String;
	address: Address;
	atmList: ATM[];
}

class CardInfo {
	cardID: Number;
	cardNumber: Number;
	bank: Bank;
	expiryDate: Date;
	cvv: Number;
	withdrawLimit: Number;
	cardType: CardType;
}

enum TransactionStatus {
	PENDING,
	PROCESSED,
	DECLINED,
	IN_PROGRESS
}

enum DepositType {
	CASH,
	CHEQUE
}

enum TransactionType {
	WITHDRAW,
	DEPOSIT,
	TRANSFER
}

enum AccountStatus {
	ACTIVE,
	BLOCKED,
	SUSPENDED
}

enum CardType {
	DEBIT_CARD,
	CREDIT_CARD
}

enum CashType {
	HUNDRED,
	FIVE_HUNDRED,
	THOUSAND,
	TWO_SHOUSAND
}