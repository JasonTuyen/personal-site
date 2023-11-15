---
title: "MyGamePal"
date: "2023-11-12"
tags: "Typescript, PostgreSQL, NextJS, Vercel, TailwindCSS, DaisyUI"
---
MyGamePal is an application to help keep track of all your video games.

[Website Link](https://mygamepal.vercel.app/)


[GitHub Repo Link](https://github.com/JasonTuyen/mygamepal)


## Project Summary
MyGamePal is an application that helps users save and track their video games library. 
The tech stack used to build this web application was: Typescript, PostgreSQL, NextJS, Vercel, TailwindCSS, and DaisyUI. 
It was my first time using this tech stack and I was surprised at how quickly I was able to develop a MVP demo. 
I can see myself using this stack in the future to quickly validate ideas.


## Project Requirements
* Allow users to save and track their video games
* Allow users to view all video games in database
* Learn Typescript, NextJS, Vercel, and TailwindCSS/DaisyUI
* Review my SQL (PostgreSQL) knowledge


## Project Thoughts
I have been a gamer for many years, but I never found an application that let’s people track their video game catalogs. There are similar applications for books (goodreads) and anime (myanimelist) but not for games. So I decided to develop mygamepal to test the idea among friends. 

Development went quickly thanks to the NextJS framework and Vercel ecosystem. The NextJS framework and Vercel web hosting ecosystem are highly compatible since they were created by the same founders. Learning these two tools have been on my to-do list for awhile, and I was able to try them out with this project. 

The full tech stack includes Typescript, PostgreSQL, NextJS, Vercel, TailwindCSS, and DaisyUI. Every tools in the stack comes out of the box with a NextJS project. As a result, this tech stack is popular among many solo developers due to the ability to quickly validate projects. During development of this project I was able to feel that speed firsthand.

Despite the pros of this tech stack, the project wasn’t all smooth sailing. I did encounter a few problems during development. One issue would be scaling. Although, Vercel offers free hosting and database storage. For larger projects that outgrow the free-tier, Vercel is much more expensive than their competitors. But is a reasonable compromise given the Vercel ecosystem’s plug and play capabilities of the NextJS tech stack.

Other issues that I encountered was also due to the limitations of the Vercel ecosystem. Specifically, I had two issues. The ecosystem discourages creating custom registration/login code and limits some SQL commands. To solve these two issues I implemented 3rd Party user creation and used another piece of software to run SQL commands. 

Overall, this was a fun project to build because I am very passionate about games and the application is something that my community could find useful. Although this project is still its bare bones version, I can see this being a project I will enjoy working on for years to come. And a project that people will find usefulness in.

### Future Development Plans
* Implement Credential based Login/Registration options
* Add full data set (currently only a small subset of games are in the database)
* Implement detailed pages with game information
* Implement search functionalities