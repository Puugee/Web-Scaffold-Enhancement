# MDS615-Group-Project TEAM 4
Web Scaffold Enhancement Project

Project Overview

This project involved enhancing a predefined web scaffold by adding specific functionalities, including a Calendar, a Music Player, and an optional Speed Reading feature. The purpose of this project was to provide hands-on experience in web development and cloud deployment. The final project was deployed on AWS Lightsail, and can be accessed via the following URL:

Live URL: http://54.253.28.134/#

Features

1. Calendar

	•	Users can add, edit, and delete events.
	•	The Calendar is fully responsive, ensuring usability across different screen sizes.
	•	Events are stored locally using local storage, so they persist across sessions without a database.

2. Music Player

	•	The Music Player allows users to upload their own audio files (supports multiple formats like MP3, WAV, etc.).
	•	Users can play, pause, skip, and adjust the volume of tracks.
	•	Supports different audio formats for compatibility across browsers.

3. Speed Reading (Optional Feature)

	•	This feature allows users to input text and practice speed reading.
	•	Users can adjust the words-per-minute (WPM) rate and see the text displayed one word at a time.
	•	Ideal for users looking to improve reading speed and comprehension.

Project Structure
├── index.html        # Main HTML file
├── css
│   └── styles.css    # Main CSS file for styling
└── images
└── js
    └── scripts.js    # JavaScript file containing all the functionality for features

Getting Started

To get the project running locally, follow the instructions below.

Prerequisites

	1.	Visual Studio Code (or any code editor of your choice)
	2.	Node.js (for future enhancements if needed)
	3.	Git (for cloning the repository)

Installation

	1.	Clone the Repository
Use Git to clone the project from the repository:

git clone https://github.com/Team-4/MDS615-Group-4.git

	2.	Open the Project
Navigate to the project folder and open it in Visual Studio Code or your preferred editor:
cd MDS615-Group-Project
code .

	3.	Run the Project Locally
You can use any local server or simply open the index.html file in a web browser to view the project.
Optionally, if you have Node.js installed, you can serve the project using a simple server:
npx serve .

Deployment

We deployed the project on AWS Lightsail. Follow these steps to deploy the project yourself:

	1.	Set up AWS Lightsail Instance
	•	Log in to your AWS account and create a Lightsail instance.
	•	Choose the appropriate configuration and create an instance.
	2.	Transfer Files to the Server
	•	Use Cyberduck or another SFTP client to connect to your AWS Lightsail instance via SSH.
	•	Transfer your project files (index.html, css/styles.css, js/scripts.js) to the appropriate directory on the server.
	3.	Access the Deployed Application
Once deployed, you can access the application through the public IP provided by AWS.

Testing

Each feature has been tested for functionality and compatibility across various devices and browsers. Usability testing was also conducted to ensure a smooth user experience.

Testing Methodologies:

	•	Functional Testing: Ensuring each feature (Calendar, Music Player, Speed Reading) works as intended.
	•	Compatibility Testing: Checking browser compatibility and responsiveness on different devices.
	•	Usability Testing: Ensuring ease of use and user-friendliness of the application.

Technologies Used

	•	HTML: Structure of the web page
	•	CSS: Styling and layout (responsive design)
	•	JavaScript: Functionality for Calendar, Music Player, and Speed Reading features
	•	AWS Lightsail: Deployment of the web application
	•	Cyberduck: File transfer using SSH/SFTP

Challenges

Some of the challenges we faced during the project included:

	•	Ensuring cross-browser compatibility for the Music Player.
	•	Debugging issues related to event handling and responsiveness for the Calendar.
	•	Integrating different audio file types without losing functionality.

Lessons Learned

Throughout the project, we gained practical experience in:

	•	Web development, especially in integrating multiple features within a predefined scaffold.
	•	Cloud deployment using AWS Lightsail and managing file transfers via SSH and SFTP.
	•	Collaboration and problem-solving as a team, helping us overcome challenges and improve the overall quality of the project.

Future Enhancements

While the core features of the application are complete, there are a few potential enhancements we could explore in the future:

	•	Adding a database to store events in the Calendar rather than relying on local storage.
	•	Enhancing the Music Player by adding playlist functionality and track progress display.
	•	Improving Speed Reading by providing users with customizable text input options and tracking reading history.

License

This project is for educational purposes only and does not have a specific license.
