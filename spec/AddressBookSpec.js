describe('Address Book', function() {
    interface('should beable to add a contact', function() {
        var addressBook = new AddressBook(),
        thisContact = new thisContact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});