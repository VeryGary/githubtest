const HtmlTemplate =(
  heading,
  subheading,
  body
) => {

  return `
      <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Notification</title>
  <style>
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

    .header {
      background-color: #f1f1f1;
      padding: 15px;
    }

    .header-image {
      max-width: 160px;
    }

    .content {
      padding: 40px;
    }

    .content a {
      color: #5797F8;
    }

    .footer {
      text-align: center;
    }

    .footer p {
      color: #4b4b4b;
    }

    h1 {
      color: #0c0c0c;
    }

    h2 {
      color: #2a2a2a;
    }

    p {
      color: #151515;
    }

    .marketing {
      font-size: 14px;
    }
    
    .inline-text {
      margin: 0;
    }

    .focused-text {
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>
<div class="container">
  <div class="header">
    <img
      class="header-image"
      src="https://shade-app-bucket.s3.us-west-2.amazonaws.com/images/Shade_BannerLogo.png"
      alt="banner"
    />
  </div>
  <div class="content">
    <h1>${heading}</h1>
    <p>${subheading}</p>
    <br />
    ${body}
    <br />
    
    <p class="marketing"><strong>What is Shade?</strong> An online platform that seamlessly connects artists
      and clients together. <a href="https://shadeapp.io" target="_blank">Learn more</a>
    </p>
  </div>
</div>
<br/>
<div class="footer">
  <p>This message was sent to you by Shade Software Ltd.</p>
</div>
</body>
</html>
  `
}

module.exports= HtmlTemplate;