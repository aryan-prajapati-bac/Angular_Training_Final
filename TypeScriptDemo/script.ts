interface IAddress {
    city: string;
    pincode: number;
    street: string;
}


interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    address: IAddress;
    contact: string | string[] | null;
    getFullName(): string;
    getFullAddress(): string;

}

let addressObject = <IAddress>{
    city: "Ahmedabad",
    pincode: 382449,
    street: "street1"
}

let personObject = <IPerson>{

    firstName: "Aryan",
    lastName: "Prajapati",
    age: 22,
    address: addressObject,
    contact: null,    // here,user can add empty string '' as well as empty array [] for no contacts.
    getFullName() {
        return "Name : " + this.firstName + " " + this.lastName;
    },
    getFullAddress() {
        return "Address : " + this.address.street + " ," + this.address.city + "," + this.address.pincode;
    }
};

console.log(personObject.getFullName());
console.log(personObject.getFullAddress());
console.log(`Contacts : ${personObject.contact}`);
