var addressObject = {
    city: "Ahmedabad",
    pincode: 382449,
    street: "street1"
};
var personObject = {
    firstName: "Aryan",
    lastName: "Prajapati",
    age: 22,
    address: addressObject,
    getFullName: function () {
        return "Name : " + this.firstName + " " + this.lastName;
    },
    getFullAddress: function () {
        return "Address : " + this.address.street + " ," + this.address.city + "," + this.address.pincode;
    },
    getContactList: function () {
        if (this.contact === undefined)
            return "Contacts : No contacts";
        return "Contacts : " + this.contact;
    },
};
console.log(personObject.getFullName());
console.log(personObject.getFullAddress());
console.log(personObject.getContactList());
