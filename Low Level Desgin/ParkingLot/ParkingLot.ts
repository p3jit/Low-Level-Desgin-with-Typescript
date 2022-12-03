class ParkingLot {
    name: String;
    address: Address;
    floorList: ParkingFloor[];
    entranceList: Entrance[];
    exitList: Exit[];
  
    public isParkingSpaceAvailable(vehicle: Vehicle): Boolean {};
}

class Address {
    buildingNumber: Number;
    streetName: String;
    pincode: Number;
    landMark: String;
  }

class ParkingDisplayBoard {
    displayBoardID: String;
    board: Map<ParkingSpaceType,Number>;

    public updateFreeSpots(parkingSpaceType: ParkingSpaceType, value: Number): void {}
}

  class ParkingSpace {
    spaceID: String;
    isFull: Boolean;
    costPerHour: Number;
    spaceType: ParkingSpaceType;
    vehicle: Vehicle;
  }
  
  class ParkingFloor {
    floorID: Number;
    isFull: Boolean
    parkingSpaceList: ParkingSpace[];
    parkingBoard: ParkingDisplayBoard;
  }

  class PaymentInfo {
    transactionID: String;
    parkingTicket: ParkingTicket;
    paymentType: PaymentType;
    paymentStatus: PaymentStatus;
  }

  class PaymentService {
    public makePayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentInfo {};
  }

  class Vehicle {
    name: String;
    vehicleNumber: String;
    parkingTicket: ParkingTicket;
    vehicleType: VehicleType;
  }

  class ParkingTicket {
    ticketID: Number;
    parkingTicketStatus: ParkingTicketStatus;
  }

  class Gate {
    gateID: String;
    parkingAttendant: ParkingAttendant;
  }
  
  class Entrance extends Gate {
    public serveParkingTicket(vehicle: Vehicle): ParkingTicket {};
  }
  
  class Exit extends Gate {
    public payForParking(ticket: ParkingTicket , paymentType: PaymentType): ParkingTicket {};
  }
  

  //ACTORS

  class Account {
    name: String;
    email: String;
    phoneNumber: Number;
    addres: Address;
    employeeID: String;
  }

  class ParkingAttendant extends Account {
    paymentService: PaymentService;
    public processVehicleEntry (vehicle: Vehicle) : Boolean {};
    public processPayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentInfo {};
  }

  class Admin extends Account {
    public addParkingFloor(parkingLot: ParkingLot , parkingFLoor: ParkingFloor): void {}
    public addParkingSpace(parkingFloor: ParkingFloor , parkingSpace: ParkingSpace): void {}
    public addParkingBoard(parkingFloor: ParkingFloor, parkingBoard: ParkingDisplayBoard): void {}
  }

  // ENUMS

  enum PaymentType {
    CASH,
    CREDIT_CARD,
    DEBIT_CARD,
    UPI
  }

  enum ParkingSpaceType {
    BIKE_PARKING,
    CAR_PARKING,
    SUV_PARKING,
    TRUCK_PARKING
  }

  enum VehicleType {
    BIKE,
    CAR,
    TRUCK
  }

  enum PaymentStatus {
    COMPLETED,
    PENDING,
    REJECTED,
    DECLINED,
    REFUNDED
  }

  enum ParkingTicketStatus {
    PROCESSED,
    UNPROCESSED
  }