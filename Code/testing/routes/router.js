const express = require('express');
const path = require('path');
const router = express.Router();

const emailTemplate = require('./emailTemplate');
router.use(express.json());

router.get('/newBooking', function(req, res) {
    const email = emailTemplate(
        "Email Notification",
        "New Booking Request",
        "Please review the booking request and get back to the artist ASAP.",
        `
        <div>
            <div style="display: flex;">
            <img
                style="width: 75px; height: 75px; border-radius: 75px; margin-right: 15px"
                src="https://shade-app-bucket.s3.us-west-2.amazonaws.com/images/profileImageDefault.png"
                alt="profile-pic"
            />
            <div style="display: flex; flex-direction: column; justify-content: center">
                <p class="inline-text focused-text">CallenAdmin</p>
                <p class="inline-text" style="height: 5px"></p>
                <p class="inline-text">Callen Egan</p>
            </div>
            </div>
            <br />
            <div style="display: flex; flex-direction: column">
                <p class="inline-text focused-text">November 1st, 2024</p>
                <p class="inline-text" style="height: 5px"></p>
                <p class="inline-text">08:00 - 10:00</p>
            </div>
        </div>
        `
    );
    res.setHeader('Content-Type','text/html')
    res.send(email);
});

router.get('/', function(req, res) {
    const email = emailTemplate(
        "Test Title",
        "Test  Heading",
        "Test Subheading of what this email is",
        '<p>same tag in a string value</p>'
    );

    res.setHeader('Content-Type','text/html')
    res.send(email);
});

module.exports = router;