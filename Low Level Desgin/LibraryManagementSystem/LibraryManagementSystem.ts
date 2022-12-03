class Address {
    country: String;
    buildingNumber: Number;
    streetName: String;
    pinCode: Number;
    landmark: String;
}

class Library {
    address: Address;
    name: String;
    bookList: BookItem[];
}

class Book {
    title: String;
    uuid: String;
    bookGenre: BookGenre;
    authors: Author[];
}

class BookItem {
    barcode: String;
    publicationDateTs: Date;
    bookStatus: BookStatus;
    bookFormat: BookFormat;
    rackLocation: String;
}

class Person {
    firstName: String;
    lastName: String;
}

class Author extends Person {
    bookPublished: Book[];
}

class Customer extends Person {
    searchObj: SearchService;
}

class Account {
    accountID: String;
    username: String;
    password: String;
    email: String;
    phoneNumber: Number;
    address: Address;
}

class Member extends Customer {
    account: Account;
    bookingService: BookingService;
}

class ReservationDetail {
    reservationDate: Date;
    member: Member;
    bookItem: BookItem;
    dueDate: Date;
}

class System {
    searchObj: SearchService;
    bookingService: BookingService;

    public SendNotification():void {};
}

class Librarian extends Member {
    public addBook(book: BookItem): void {};
    public editBook(book: BookItem): BookItem {};
    public deleteBook(barcode: String): BookItem {};
}

class SearchService {
    public searchByTitle(searchString: String): BookItem[] {};
    public searchByGenre(searchString: String): BookItem[] {};
    public searchByAuthor(searchString: String): BookItem[] {};
    public searchByPublicationDate(searchDate: Date): BookItem[] {};
}

class BookingService {
    public getReservationDetailsbyBookItem(bookItem: BookItem): ReservationDetail {};
    public getReservationDetailsbyMember(member: Member): ReservationDetail[] {};
    public reserveBookItem(bookItem: BookItem ,member: Member): ReservationDetail {};
    public renewBookItem(bookItem: BookItem, member: Member): ReservationDetail {};
    public returnBookItem(bookItem: BookItem, member: Member): void {};
}

enum BookGenre {
    SCI_FI,
    SUSPENSE,
    ACTION,
    ADVENTURE
}

enum BookStatus {
    AVILABLE,
    RESERVED,
    LOST,
    ISSUED
}

enum BookFormat {
    HARDCOVER,
    PRINTED,
    PAPERBACK,
    JOURNAL
}