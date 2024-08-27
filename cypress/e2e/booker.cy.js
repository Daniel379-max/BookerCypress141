import booking from '../fixtures/booking.json'

describe('Booker API', () => {

    before('Create Token', () => {
        cy.createToken()
    })

    it('Create Booking', () => {
        cy.request({
            method: 'POST',
            url: '/booking',
            body: booking
        }).then(({ status, body }) => {
            expect(status).to.eq(200)
            Cypress.env('booking', body.booking)
            expect(body.booking.firstname).to.eq('Daniel')
            expect(body.booking.lastname).to.eq('Brown')
            expect(body.booking.totalprice).to.eq(250)
            expect(body.booking.depositpaid).to.eq(true)
            expect(body.booking.bookingdates.checkin).to.eq('2024-08-26')
            expect(body.booking.bookingdates.checkout).to.eq('2024-08-28')
            expect(body.booking.additionalneeds).to.eq('Breakfast')

        })
    })
})