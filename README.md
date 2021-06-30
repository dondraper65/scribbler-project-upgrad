# Scribbler Project
##### Submitted by: Rahul Singh Raghav

## Description
Scribbler project is a blogging webpage frontend. It has been made following certain guidelines provided to us. Every detail of the project is designed in accordance with the Evaluation rules laid out by Upgrad. Frequent Small step commits have been made as instructed.

## Contents
1. [Home Page](#home-page)
2. [Blog List](#blog-list)
3. [Blog Page](#blog-page)

### Code formatting Guidelines Followed
1. The code is formatted correctly, uses the right spacing and indentation, and follows the formatting guidelines laid out in the Google HTML/CSS Style Guide.
2. The HTML, CSS and JS portions of the code are clearly segregated into separate files.
3. The code contains good comments that explain how  complicated portions of the code work
4. HTML/CSS/JS objects, classes or variables have proper and logical names
5. Frequent small commits have been made at all stages of the project.

## Home Page
**GuideLines followed**
1. The Javascript code produces no error.	
2. On clicking the "Sign Up" and "Sign In" buttons, a modal should appear on the screen.
3. Only "modal" must be used for creating that dialog box.
4. The text "Get Started" is placed correctly at the centre of the modal. There should be a tiny cross button towards the top-right, which when clicked, would close this modal.
5. There must be 4 input boxes - Full Name, Username, Password, Confirm Password. They all must be “required” fields. They also must have placeholders.
6. A “Sign Up” button is inside the modal like shown in the screenshot.
7. The title of the modal is "Welcome Back!" and it is placed at the centre of the modal.
8. There should be a tiny cross button towards the top-right, which when clicked, would close this modal.
9. There must be 2 input boxes -Username & Password. They all must be “required” fields. They also must have placeholders. A “Sign In” button is inside the modal like shown in the screenshot. On clicking the "Sign Up" portion of “Not a member? Sign Up” it should display the sign-up modal which was created earlier.
8. On clicking the “All Posts” button, it redirects to a new page “bloglist.html”.
On clicking the "Create Post" button, it should display a modal.

## Blog List
1. The Javascript code produces no error.
2. The header made in Part A has been successfully imported and looks like the one shown in the screenshot.
3. The text of the blog towards the right of the author name ("Jimi") must not be displayed completely (it should only be partially displayed). In the CSS, the blog text must have a property "overflow:hidden"
4. Above each blog post, there must be a trash icon, towards the top-right of each blog, which when clicked would display a deletion modal as shown in the screenshot.
5. Only two blog posts must appear on each row.
6. The display of these blog post boxes must be flexible such that when the display size of the screen is changed, the blog posts adjust their placement automatically. (i.e.at all times, only two blog posts remain on one row even when screen size changes)

## Blog Page
1. The edit button is present and correctly positioned as shown in the screenshot.
2. When clicked, this edit button should make the blog body and blog title editable. When the blog body and title is in the “editable” mode, there should be a cursor which would enable the user to edit/erase/add any text he/she wants in it.
3. While the blog body is in the editable mode, a button called "Save" is displayed in place of the "Edit" button.
4. On clicking the "Save" button, the blog should be saved as it is (new changes which the user has done must be saved), the blog body / blog title should no longer be editable.
5. The "Edit" button should reappear after the clicking the "Save" button once the changes to the blog have been made by the user (in place of the "Save" button)
6. Below the body of the blog, a "Like" button is created and it looks like the one in the screenshot.
7. In the default state, a statement called "Be the first one to like this!" must be displayed just below the "Like" button.
8. On liking the blog for the first time, this statement must be updated to "1 person likes this
9. After liking the blog post for the first time, the "Like" button must morphe into a button "Liked!"
10. Subsequently, whenever the "Like" button is clicked, the number of people who have liked this should get incremented and correspondingly, the statement below the "Like" button should change. As an example, on clicking the "Like" button for the 2nd time, the statement must get updated to "2 people have liked this!", for the third time, it should get updated to "3 people have liked this!" and so on.
11. Below the "Like" button, there is an input box with a placeholder text "Leave a comment...".
12. Below this box,  a red coloured "Comment" button must have been created which when clicked, must display the typed comment in the “All Comments” section as shown in the screenshot.
13. Every new comment must be added to the top of the "All Comments" section. Meaning that the latest comment must be added to the top.
14. Individual comments have white as a background and must be separated from each other. The background of the comment box is grey as shown in the screenshot.
