# Naming Reason

"Lingua" is a Latin word that means "language" or "tongue." It is often used in English to refer to language-related concepts, such as in the term "linguistics," which is the scientific study of language and its structure.

node_modules = it contains different types of dependencies.
package-lock.json = exact versions of different dependencies
postcss.config.js == used for tailwind css framework
tailwind.config.js = used for configuration of tailwind css framework
vite.config.js = used for configuration of vite

index.html = it call main.jsx

firebase folder = firbase.config.js = it contains all authentication information

<!-- you should learn -->
1. DOM manipulatino of javascript

2. Make sure to keep the navbar and footer on all the pages except on the 404 page. Create a good, stylish, and meaningful footer. (including website logo or name or both, copyright, some contact information, Address etc.)

3. Navbar
Your website should have a navbar with the Website logo or Website name, Home, Instructors,  Classes, Dashboard and User profile picture. The user profile picture and Dashboard on the navbar are conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button.

4. Registration & Login System:
    Login Page:
    When a user clicks on the login button, they will be redirected to the login page having the following:
    - Email
    - Password (This field can hide/unhide the password by clicking on an icon)
    - A link that will redirect to the registration page
    - Keep at least one social login
    Registration Page:
    The Registration page will have the Email/Password form having the following fields:
    - Name
    - Email
    - Password
    - Confirm Password
    - Photo URL
    - (optional) Gender
    - (optional) Phone Number
    - (optional) Address
    Note: Keep at least one social login

Note: Do not enforce forget password feature and  the email verification method, as it will inconvenience the examiner. If you want, you can add email verification/forget the password after receiving the assignment result.

    Error for Registration system:
    On the Registration page, display errors when:
    The password
    - is less than 6 characters
    - don't have a capital letter
    - don't have a special character

   Note: A user cannot submit empty email and password fields.

5. Homepage:
    - Top Slider Section  Will have a relevant slider. Use relevant text, information, message, and picture. The design is entirely up to you.
    - Popular Classes Section  Show relevant pictures related to the classes or activities. Have the top 6 classes based on the number of students.
    - Popular Instructors Section  Show relevant pictures related to the instructors. Show the top 6 instructors based on the number of students in their Class. However, selecting top instructors based on the number of students is optional, but you must show 6 instructors.
    - Extra Section Add one relevant sections. Make it attractive :heart_eyes:. Try to use animation effects.

6. Instructors Page:
Display all the instructors. Each Instructor will be:
   - Image
   - Name
   - Email
TODO : FUTURE FEATURES
   - Number of Classes taken by the Instructor. 
   - Name of the Classes taken by the Instructor. 
   - `See Classes` button to show classes by this Instructor. This will take to a new link
   - PAGINATION - will be applied

7. Classes page:
Show all approved classes on this page. Each Class will have the following:
   - Image
   - Name
   - Instructor name
   - Available seats
   - Price
   - Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
        - Available seats are 0
        - Logged in as admin/instructor
    - The class card background will be red if the available seats are 0.

8. Student Dashboard:
    It will be private & only a student can access this route.
     - My Selected Classes: The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete, and Pay buttons. More in point 9. On clicking the Delete button, a student can remove a selected Class from the list.
     - My Enrolled Classes:  Show all the Classes a student selected after successful payment.

9. Payment: (Student Dashboard)
    - Pay button Action: Upon clicking the Pay button for a Class on the My Selected Classes, the student will be redirected to the payment page to finalize their payment. After a successful payment, the Available seats for the particular Class will be reduced by 1. The Class information will be shown on the My Enrolled Classes page and removed from the My Selected Classes page.
    - Create a payment history page for students. It will show the payment made by that student. Make sure to sort the payment history descending. The newest payment will be at the top



10.  Instructor Dashboard:
    It will be private & only an instructor can access this route.
Add a Class: This page will have a form with the following fields:
        - Class name
        - Class Image
        - Instructor name (read-only) (use the displayName value of logged in user/instructor)
        - Instructor email (read-only) (use the email value of logged in user/instructor)
        - Available seats
        - Price
        - Add button
        - When creating a class on the database, the value of the status field will be pending.

 My Classes:  Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button.
 Total Enrolled Students: Initially it will be zero. If any student has successfully booked the Class, show the total number of students.
 Feedback: 
            - There will be no feedback if the Class is in pending or approved status.
            - If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column.

11. Admin Dashboard:
 	It will be private & only an admin can access this route.
Manage Classes: This page will show all the Classes. All the classes added by the Instructor from the Add Class page will be displayed here. Show the following information: Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
        
 Note: By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.
Note: If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled. 
Note: A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor. You can also do this in another route except for the modal.

Manage Users:  The admin can see the relevant information of all registered users. By default, everyone will be a student. And there will be 2 buttons: Make Instructor button and Make Admin button. If a user clicks any of the buttons, disable it.
Make Instructor button Action: Update the user role as an instructor.
 Note: If the admin makes a user instructor, that user profile page will have the Instructor as the role
Make Admin button Action: Update the user role as an admin.

writing_hand: Bonus Task:
1. Minimum 20 meaningful git commits on the client-side repository and 12 meaningful commits on the server-side repository. Feel free to commit as many as needed to save your progress during load-shedding.

2. Create a readme for the client-side and write about your project.
    - Website name or logo or both
    - Minimum 5 points of your website features
    - Used packages/ technology name
    - Live site link

3. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.

4. Make the home page responsive. If possible, Make your entire website responsive\. (It is ok if the table is not responsive\.) 

5. Use tanstack query (react-query) in at least two places. If needed, you can use it everywhere. 

6. use Axios for at least two calls.

7.  Must Use [react-hook-form](https://react-hook-form.com/) in the registration & login page. Using react hook form in another place is optional.

8. Use the Environment variables both on the client side & server side.

9. Implement  JWT token for Login and Registration systems (Email/ password & social login)\. You will send the token for the Dashboard routes and verify the user\.

10. Create a 404 page. Add any interesting image animation & a back-to-home button on the 404 page. Do not add header & footer in this page.

writing_hand: Optional Task

1. (Highly Recommended) Add extra features you have learned so far, or you can explore new things. This will help you in the future to differentiate your project from others.

2. You can explore the below packages & try to make your website more attractive:
-[React-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
    - [React-joyride](https://www.npmjs.com/package/react-joyride)
    - [React-card-flip](https://www.npmjs.com/package/react-card-flip)
    - [React-image-zoom](https://www.npmjs.com/package/react-image-zoom)

3. Explore [Tanstack query mutations](https://tanstack.com/query/latest/docs/react/guides/mutations)

4. If you want, you can add an intro video button in each Class information; clicking on this button will open a modal that will play the video.

5. Add a button on the Instructor called see classes. After clicking on an instructor's See Classes button, a student can see all the Classes taken by that Instructor. Only classes approved by the admin will be displayed here. If any classes of the Instructor are in the pending/ denied status in the Instructor's dashboard, then they will not be shown here. See point 12(3). 

6. Following Feature A student will see all instructors he/she is following after clicking the **Follow button** on the **Instructors page**. To implement this feature, you must add a follow button on the instructors page. Also, after clicking on the **Follow button**, show an **Unfollow button**.On clicking the **Unfollow button**, a student can unfollow an instructor, and the Instructor will disappear from the following page. Make sure to make the **Follow button active** on the **Instructors Page** again.


7. (optional) **Profile page will be private:
    On clicking the user profile picture, the user will be redirected to the Profile page, where they will see all the information:
    - Name
    - Image
    - Email
    - Phone Number
    - Address
    - Role **(Instructor/ Student/Admin)**
    - Gender
    - Update button
        **Update Action:** a user can update their information **except role and email**on clicking the Update button.

8. (optional) Updated button Action: An instructor can update a Class information. You can show the form either in a modal or in another route. The update button will be disabled if the status is approved.

9. Manage Students: On the Manage Classes, there will be a button called show students. Clicking on that link will take an admin to a route where the admin will see students for a particular class. An admin will be able to kick out a student from a class. 

pushpin: What to submit
- Your client-side code GitHub repository
- Your server-side code GitHub repository
- Your live website link
- Admin email and password.

page_with_curl: Some Guidelines
1. Do not waste much time on the website idea. Just spend 20-30 minutes deciding, find a sample website, and start working on it.
2. Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images.
3. Don't look at the overall task list. Just take one task at a time and do it. Once it's done, pick the next task. If you get stuck on a particular job, move on to the next lesson.
4. Stay calm, think before coding, and work sequentially. You will make it.
5. Be strategic about the electricity issue.
6. Use ChatGPT to generate JSON data. You can use chatGPT for other purposes as well.


Earn your Reward:
The greatest joys of life aren't gifted; they're earned.

