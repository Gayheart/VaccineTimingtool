Introduction

The Rabies Vaccine Scheduler is a web-based application designed to help schedule and keep track of rabies vaccination dates. This documentation outlines the development process, deployment, and hosting of the application.

Development Process

The application was developed using HTML, CSS, and JavaScript. The development process involved the following steps:

1. Writing the HTML, CSS, and JavaScript code to.
2. Testing and debugging the application to ensure it works as expected.

Deployment and Hosting

The application was deployed and hosted on an Apache server on an AWS Linux instance. The deployment process involved the following steps:

1. Creating an AWS Linux instance.
2. Installing the Apache server on the instance.
3. Downloading the application files from GitHub using wget.
4. Configuring the Apache server to serve the application files.
5. Starting the Apache server to make the application accessible.

Alternatively, the application can also be hosted using GitHub Pages. This involves the following steps:

1. Creating a GitHub repository for the application.
2. Enabling GitHub Pages for the repository.
    a. Go to Repository Settings: Navigate to the repository's settings page.
    b. Select GitHub Pages: In the left-hand menu, click on "Pages" under the "Code and automation" section.
    c. Select Source: Choose the source branch and directory to deploy from. For example, select "main" as the branch and "/" (root directory) as the source directory.
   Github pages is auto-enabled and domain created. In my case [https://gayheart.github.io/VaccineTimingtool/]
   
    Future Development

The next phase of the project involves integrating Amazon SNS to send vaccination dates to clients via SMS and email. Additionally, a reminder feature will be implemented to send reminders to clients a day before the vaccination date.
