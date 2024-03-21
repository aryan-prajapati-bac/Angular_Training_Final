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
    contact: ['8487980301', '8787878798s'],
    getFullName: function () {
        return "Name : " + this.firstName + " " + this.lastName;
    },
    getFullAddress: function () {
        return "Address : " + this.address.street + " ," + this.address.city + "," + this.address.pincode;
    },
    getContactList: function () {
        return "Contacts : " + this.contact;
    },
};
console.log(personObject.getFullName());
console.log(personObject.getFullAddress());
console.log(personObject.getContactList());
