---
title: "RIT Pho U"
date: "2023-10-24"
tags: "Python, SQLite, Flask, Freelance"
---
A Restaurant Inventory Tracker for my local pho restaurant.


[GitHub Repo with Demo](https://github.com/JasonTuyen/RIT-Pho-U)


## Project Summary
Disclaimer: This is a freelance project that I did with a local pho restaurant, some information has been removed or omitted in this post and source code for privacy reasons.
This is a simple restaurant inventory tracker that I developed for a local pho restaurant using a Python backend, Sqlite3 database, and Flask frontend. 
The resulting web app tracker was able to replace their traditional paper system while staying similarity priced. 


## Project Requirements
* Replace current paper process (While keeping system affordable and available)
* Need to easily see low stock items
* Make shopping easier, by sending notifications of low stock items 


## Project Thoughts
For the most part this project was straightforward.
I just had to convert the restaurant’s original paper based tracking system into a SQL table and display it using Flask.
The next step was to write the CRUD commands to make changes to the table when required.
After the code for all that was done I had successfully converted their paper process to digital.


However I still needed to address the pain points that they originally had which were:
1. Need to easily see low stock items
1. Forgetting to bring the tracker when shopping


In their paper process the restaurant had to go through their inventory twice.
The first time to take stock of what they had.
The second time to highlight the items that would need replacing soon.
This is precious time that can be saved by automation.
With the tracker that I created, the table would automatically highlight low stock items solving this paint point.


For their second pain point they wanted a way to send the list of low stock items to their phone.
This is because they would normally just bring the list to the store with them, but would sometimes forget.
Causing them to waste time trying to remember or retrieve the list again.
With my web app, with the simple click of a button an email of the necessary items will be sent.


Lastly, we needed a place to run the code and send the reminders.
Since the restaurant wanted to keep costs affordable, the server is hosted on a laptop that is constantly running in the manager’s office.
Any employee checking the stock is able to access the webpage locally to run inventory check.