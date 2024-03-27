fetch('emailHeader.html')
    .then(response => response.text())
    .then(html => document.getElementById('headerImport').innerHTML = html);
fetch('newBookingTest.html')
    .then(response => response.text())
    .then(html => document.getElementById('newBookingImport').innerHTML = html);
fetch('emailMarketing.html')
    .then(response => response.text())
    .then(html => document.getElementById('marketingImport').innerHTML = html);
fetch('emailFooter.html')
    .then(response => response.text())
    .then(html => document.getElementById('footerImport').innerHTML = html);