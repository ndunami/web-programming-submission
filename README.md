# Race Time app "MOBIDASH" - by up2219449

## Key features
This web application is designed to help time and manage races in a simple, offline-friendly way. The key features include the ability to start 
and stop races, record finisher times, download results as CSV, clear recorded data, and navigate through the app via a minimal user interface
for people that may likely be waring gloves or in the rain.

Start Race Timer:
 - Where to find it: On the main page of (index.html),you need to click the bright green “Start Race” button that will bring you to a new page.
 - How it works: Starts a high precision race timer that counts up and displays it live. I chose the format HH:MM:SS:MMM (Hours:seconds:minutes:Milliseconds).
 - My Design choice: I Built it for simplicity and ease of use in the impared race environment. The large buttons and clear feedback help reduce errors under pressure, in gloves or rain.

Record Finishers:
 - Where to find it:In the "Start Race page" During an active race, a blue “Record Finisher” button is shown.
 - How it works: Records the current race time as a runner’s finishing time. records over 60 hours of race time. it will not allow you to record if a race timer is not active.
 - Design thinking: Designed to be quick and accurate, the button logs the time instantly with minimal UI distraction and displays a list of finish times in the lower half of the screen.

Stop Timer and Submit Results:
 - Where to find it: During an active race timer, click “Stop Race” to stop the timer. Then click "Submit Results."
 - How it works: Ends the race, freezes the time, and stores results for display. works in airplane mode as it is stored locally and sent as a batch once the device is back on the internet.
clears race times after results are submitted.
 - Design thinking: Prevents accidental editing or overwriting of results post-race.

View Results:
 - Where to find it: Main page > Blue “View Results” button will bring you to a new page.
 - How it works: Shows all recorded finishers in a styled results box. Buttons to download results as CSV or clear them and erase times from the database are visible.
 - Design thinking: Ensures clarity for organizers, provides downloadable data for use in spreadsheets CSV fromat.

Settings Page:
 - Where to find it: I places a Gear icon (like this -> ⚙️) on the top right of the home screen. this brings you to a new page where HELP and EMERGENCY CONTACTS can be found.
 - How it works: Navigates to a new page prepared for more non race features.
 - Design thinking: a functional page that will provide the user with a quick emergency contact list and a help section to guide the user on how to use the app.

Navigation Using Headers:
 - Where to find it: The header on pages like the timer, help and results view.
 - How it works: this acts as a back button that returns the user to the home page on every page.
 - Design thinking: Keeps navigation intuitive and consistent across views without cluttering the UI with extra buttons, all non active racing features are placed on the this side of the
app for simplicity.


## AI
My Summary

the AI I used(ChatGPT) was used extensively for guidance, correcting syntax, code generation, troubleshooting, and refining UI/UX. I relied on it to help clarify ideas, debug issues, and polish features I had implemented or designed. It helped me speed up repetitive tasks and provided helpful alternatives when 
I was stuck on what direction to take my app. A big example of this would be my use of AI during the creation of a barcode scan feature. The majority of
app features were mostly made without much help from AI but the barcode scan feature included heavy use of AI to create, as I had no Idea on where to start
and some polishing from me to make it work as intended after the initial guide.

##Prompts for trouble shooting:
 - Help, my app wont open any pages when running on ports 8080, whats going on?
 - The app only works on port 3000 and breaks on 8080. how do I fix this?
 - how do I kill apps or open space to apps using port 8080?

##Promps for the features (BARCODE SCANNER)
 - how would you make a barcode scanner in a web app
 - hoe do you connect it to a camera in a mobile device?
 - Help me design a barcode scanner feature for my web app.
 - How do I make this request to use the user camera
   
##Prompts used to debug or polish features:
 - This is the code ive written. explain why my back button isnt working in this HTML page? Highlight the syntax errors or missing lines of code.
 - Can you go over my code and help me remove syntax errors and repetetive code.
 - How can I make this code snippet more efficient and maintainable
 - Can you help me change the format for race times in milliseconds to HH:MM:SS:SSS? currently its only going to HH:MM:SS, how do I add the milliseconds part?

##Prompts used to refine the UI:
 - gove me a basic style on this page. it should look consistent on different screens?
 - my buttons are overlapping and padding isnt giving the intended result. how would you fix this?
 - what colors would you suggest for a race app for people running in the rain?

##Idea generation:
 - give me some ideas for app design. pretend Im a jogger in the rain with gloves on. how would you make this app user friendly?
 - what are some additional features you reckon would be essential to an app for joggers that does (i listed the core features) I want the app simple and easy for first time users
as well as experienced users so give me a list of suggestions to use.

##Lessons I Learned in development:

AI is unreliable. Most AI suggestions didn’t quite work. It frequently assumed access to libraries or frameworks not allowed in this coursework. 
I had to rework or strip down several ideas. However, the back and forth dialog helped me learn more about JavaScript, CSS layout tricks, and how to break complex features 
into smaller chunks. The process made it very quick for me to spot syntax mistakes or direct me on debugging certain issues. an example to this was failing to open other pages because
I had another app using port 8080. forcing me to use 3000 until I could figure out what was going on, AI helped me spot this quickly and fix my app to meet delivery specifications. 
It also helped me speed up my coding and make it more maintainable as It helped me spot redundant code I was no longer using or repetetive code
I had written more that once or could reuse elsewhere

#Improvements since Prototype:

Since the prototype, I’ve significantly improved the design, added a proper results view, enhanced navigation, and implemented export/download and barcode scan features. I’ve also cleaned up layout 
consistency across all screens, improved accessibility by using large clear buttons, and ensured everything works offline in airplane mode, letting the user send the file in a batch
 when reconected online and download CVS files.

##Final Reflection:

This project was a major learning opportunity in building a full app without any external libraries. It forced me to rely on native JavaScript, 
the DOM API, and CSS alone. Using AI helped me get over roadblocks, but I still wrote, understood, and controlled every part of the implementation. 
From designing the UI, structuring the HTML/CSS, implementing logic in JS, and debugging the backend, I now feel more confident building standalone web apps in raw JavaScript.

##References:

Volunteer - Parkrun app
The design and core functionality of this application were heavily inspired by the Volunteer - Parkrun app. Its intuitive layout and simplicity influenced the structure of the timer, results, and barcode scanning pages.

YouTube Video: Live Demonstration of Bar Code Reader in Java using iText.jar API | Practice Project | ‪@TechRanch – YouTube
Link: https://www.youtube.com/watch?app=desktop&v=Ll1HPZMjt1s
This video guided my early understanding of how I could structure the barcode scanning feature and inspired some of the logic used to the code. but no code was coppied.
