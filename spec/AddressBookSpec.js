//lisan uue kirje, milles defineerida projektis vajalikke objekte ning muutujaid
describe('Address Book', function () {
    var addressBook,
        thisContact;

    //lisan funktsiooni, millega iga funktsiooni eel aadressraamatu ja kontakti objektid välja kutsutakse
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to contact', function () {

        //lisan meetodi, millega kontakte aadressraamatusse lisada
        addressBook.addContact(thisContact);

        //eeldan, et päringu peale tagastakse mulle lisatud kontakt
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    //lisan uue kirjelduse kontakti kustutamiseks
    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);

        //lisan meetodi, millega lisatud kontakti kustutada saan
        addressBook.deleteContact(0);

        // eeldan, et lisatud kontakti objekt on kustutatud
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

//lisan uue kirje asünkroonseks kontakti lisamiseks
describe('Async Address Book', function() {
    it('should grab initial contacts', function() {
        var addressBook = new AddressBook();

        //lisan funktsiooni, millega iga funktsiooni eel on päring märgitud lõpetatuks
        beforeEach(function(done) {

            //lisan meetodi, millega kontakte asünkroonselt lisada saan
            addressBook.getInitialContacts(function() {

                //kutsun välja done funktsiooni, mis annab meie funktsioonile teada, et asünkroonne päring on lõpetatud
                done();
            });
        });

        
        it('should grab inital contacts', function(done) {

             //eeldan, et kontaktide lisamine õnnestus
            expect(addressBook.initialComplete).toBe(true);
            done();
        });
    });
});