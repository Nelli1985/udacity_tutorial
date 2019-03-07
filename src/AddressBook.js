//loon aadressiraamatu konstruktorfunktsiooni
function AddressBook() {
    this.contacts = []; 
    this.initialComplete = false; 
}

//Defineeritakse funktsioon, mis lubab contacti uue parameetrina massiivi
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function() {
        self.initalComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

//loon uue funktsiooni kontaktide lisamiseks, lisab uue kontakti ülalloodud masssiivi
AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

//loon funktsiooni kontaktide tagastamiseks
AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

//loon funktsioon elementide kustutamiseks massiivist
AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}