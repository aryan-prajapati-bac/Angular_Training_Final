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
    contact: null, // here,user can add empty string '' as well as empty array [] for no contacts.
    getFullName: function () {
        return "Name : " + this.firstName + " " + this.lastName;
    },
    getFullAddress: function () {
        return "Address : " + this.address.street + " ," + this.address.city + "," + this.address.pincode;
    }
};
console.log(personObject.getFullName());
console.log(personObject.getFullAddress());
console.log("Contacts : ".concat(personObject.contact));
