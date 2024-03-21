interface IAddress{
    city:string;
    pincode:number;
    street:string;
}


interface IPerson{
    firstName:string;
    lastName:string;
    age:number;
    address:IAddress;
    contact:string | string[];
    getFullName():string;
    getFullAddress():string;
    getContactList():string|string[]
    
}

let addressObject=<IAddress>{
    city:"Ahmedabad",
    pincode:382449,
    street:"street1"
}

let personObject=<IPerson>{

    firstName:"Aryan",
    lastName:"Prajapati",
    age:22,
    address:addressObject,
    contact:['8487980301','8787878798'],
    getFullName(){
        return "Name : "+this.firstName +" "+ this.lastName;
    },
    getFullAddress(){
        return "Address : "+this.address.street +" ,"+this.address.city+","+this.address.pincode;
    },
    getContactList() {  
        return "Contacts : "+this.contact;       
    },
};

console.log(personObject.getFullName());
console.log(personObject.getFullAddress());
console.log(personObject.getContactList());