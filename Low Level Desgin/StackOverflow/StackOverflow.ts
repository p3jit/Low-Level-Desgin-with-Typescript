class Account {
    name: String;
    email: String;
    address: Address;
    phoneNumber: Number;
    userName: String;
    passWord: String;
    accountStatus: AccountStatus;
    reputation: Number;
}

class Address {
    buildingNumber: Number;
    streetName: String;
    country: String;
    pinCode: Number;
    landMark: String;
}

class Badge {
    badgeID : String;
    value: String;
}

class Tag{
    name:String;
    description:String;
}
class Flag {
    isFlagged: Boolean;
    flagReason: String;
}

class User {
    userID: String;
    searchObject: SearchObject;
    public getQuestions(searchString: String): Question[] {};
}

class Member extends User {
    account: Account;
    badgesList: Badge[];

    public postQuestion(question: Quesiton): void {};
    public postAnswer(question: Question, answer: Answer): void {};
    public postComment(comment: Comment, entity: Entity) :void {};
    public addVote(entity: Entity , voteType: VoteType) : void {};
    public addFlag(entity: Entity): void {};
    public getBadges(): Badge[] {};
}

class Moderator extends Member {
    public closeQuestion(question:Question): Boolean {};
    public restoreQuestion(question: Question): Boolean {};
}

class Admin extends Member {
    public blockMember(member: Member):void {};
    public unBlockMember(member: Member):void {};
}

class Entity {
    entityID: String;
    voteMap: Map<VoteType,Number>;
    flag: Flag;
    creator: Member;
    createdTs: Date;
    comments: Comment[];
}

class Question extends Entity {
    answerList: Answer[];
    tagList: Tag[];
    title: String;
    description: String;
    questionStatus: QuestionStatus;

    public addTag(tag: Tag): void {};
}

class Answer extends Entity {
    answerText: String;
}

enum QuestionStatus {
    ACTIVE,
    BLOCKED,
    DEACTIVATED,
}

enum AccountStatus {
    ACTIVE,
    SUSPENDED,
    BANNED,
    BLOCKED
}

enum VoteType {
    UPVOTE,
    DOWNVOTE,
    CLOSEVOTE,
    DELETEVOTE
}