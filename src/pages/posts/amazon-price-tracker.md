---
title: "Amazon Price Tracker"
date: "2024-05-17"
tags: "Python, BeautifulSoup"
---
An Amazon price tracker that tracks a list of products and returns the total price.

[GitHub Repo Link](https://github.com/JasonTuyen/prototype/blob/master/amazon-price-tracker/app.py)


## Project Summary
This is a simple price tracker for Amazon products built using Python and BeautifulSoup. 
This application takes a list of Amazon products and use BeautifulSoup to get the price of all the items.
Once collected it will return the total price of all products in the list.


## Project Requirements
* Return the total price of my Amazon shopping list


## Project Thoughts
I recently started a new job, so now I have more disposable income for my Amazon shopping. In order to prevent overspending and to make sure I get the lowest price possible, I coded up this price tracker.

There are many Amazon price trackers. However, most trackers are too over engineered for my purpose. Most trackers are created to send emails after prices have dropped a specific percentage. For my use case, I just needed to know if the price fit my budget. This is why my code only tracks the price and returns the total, I only care that the total is less than my budget.

From a technical standpoint, there is not much to explain. However, I highly recommend using BeautifulSoup if you want to start doing some web scrapping. This was my first project using BeautifulSoup and doing web scrapping. I was able to get this project done in less than a hour, so I highly recommend BeaufifulSoup for it's ease fo use.

### Future Development Plans
* Create a GUI to make the project more visually appealling
* Implement function to add and remove from the product list