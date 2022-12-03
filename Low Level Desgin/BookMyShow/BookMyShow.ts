class BookMyShowService {
	cinemaHallList: CinemaHall[];

	public getMovieList(date: Date, city: String): Movie[] {};
	public getCinemaHasllList(city: String, date: Date): CinemaHall[] {};
}

class Address {
    buildingNumber: Number;
    streetName: String;
    country: String;
    pinCode: Number;
    landMark: String;
}

class CinemaHall {
	audiList: Audi[];
	name: String;
	cinemaHallID: Number;
	address: Address

	public getMovieList(dateList: Date[]): Map<Date,Movie> {};
	public getShowTimingForMovie(date: Date, movieName: Movie): Map<Date,Show> {};
}

class Audi {
	audiID: Number;
	audiName: String;
	showList: Show[];
}

class Movie {
	movieID: Number;
	movieName: String;
	movieLanguage: Language;
	movieGenre: MovieGenre[];
	releaseDate: Date;
	movieDuration: Number;

	showMap: Map<Date,Show[]>;
}

class Show {
	showID: Number;
	movie: Movie;
	startTime: Date;
	endTime: Date;
	duration: Number;
	hallPlayedAt: CinemaHall;
	seatList: Seat[];
}

class SearchService {
	public getMoviesByTitle(searchString: String): Movie[] {};
	public getMoviesByLanguage(searchString: String): Movie[] {};
	public getMoviesByGenre(searchGenre: MovieGenre): Movie[] {};
	public getMoviesByReleaseDate(searchDate: Date): Movie[] {};
	public getMoviesByCityName(searchCity: String): Movie[] {};
}

class PaymentService {
	public makePayment(amount: Number,paymentType: PaymentType): Boolean {};
}

class BookingService {
	paymentService: PaymentService;

	public makeBooking(bookingObj: BookingDetails): void {};
}

class Seat {
	seatID: Number;
	seatType: SeatType;
	seatStatus: SeatStatus;
	price: Number
}

class Account {
    accountID: String;
    username: String;
    password: String;
    email: String;
    phoneNumber: Number;
    address: Address;
}

class Customer {
	guestID: Number;
	searchService: SearchService;
}

class Member extends Customer {
	account: Account;
	bookingService: BookingService;
	bookingList: BookingDetails[];

	public getBookingDetailsList(): BookingDetails[] {};
}

class Admin extends Member {
	public addMovie(movie: Movie): void {};
	public updateMovie(movie: Movie): void {};
	.
	.
	.
	.
}

class BookingDetails {
	bookingID: Number;
	bookingDate: Date;
	seatList: Seat[];
	movie: Movie;
	show: Show;
	member: Member;
	audi: Audi;
	paymentStatus: PaymentStatus;
	bokkingStatus: BookingStatus;
}

enum PaymentStatus {
	PAID,
	PENDING,
	UNPAID,
	CANCELED
}

enum BookingStatus {
	BOOKED,
	REQUESTED,
	REVOKED
}

enum Language {
	ENGLISH,
	FRENCH,
	GERMAN,
	BENGALI,
	HINDI
}

enum MovieGenre {
	ACTION,
	ADVENTURE,
	SCI_FI,
	COMDEY
}

enum SeatType{
	CLASSIC,
	ROYAL,
	BALCONY,
	RECLINER
}

enum SeatStatus{
	BOOKED,
	AVAILABLE,
	RESERVED,
	NOT_AVAILABLE
}

  enum PaymentType {
    CASH,
    CREDIT_CARD,
    DEBIT_CARD,
    UPI
  }