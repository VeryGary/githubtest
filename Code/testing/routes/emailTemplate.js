const emailTemplate = (
    title,
    heading,
    subheading,
    body
  ) => {
    return `
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
            /* Your CSS styles here */
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 5px auto;
                background-color: #ffffff;
                border: 1px solid #969696;
                border-radius: 4px;
                overflow: clip;
            }
            .content {
                padding: 40px;
            }
            .content a {
                color: #5797F8;
            }
            p {
                color: #151515;
            }
            .inline-text {
                margin: 0;
            }
            .focused-text {
                font-size: 18px;
                font-weight: bold;
            }
            h1 {
                color: #0c0c0c;
            }
            h2 {
                color: #2a2a2a;
            }
            </style>
        </head>
        <body>
        <div class="container">
        <div id="headerImport"></div>
            <div class="content">
                <h1>${heading}</h1>
                <p>${subheading}</p>
                <br />
                ${body}
                <br />
                <div id="marketingImport"></div>
            </div>
        </div>
        <br/>
        <div id="footerImport"></div>
    </body>
    <script>
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
    </script>
    </html>
  `;
  };
  
  module.exports = emailTemplate;