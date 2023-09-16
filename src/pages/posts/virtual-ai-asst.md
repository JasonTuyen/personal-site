---
title: "Virtual AI Assistant"
date: "2023-04-06"
tags: "ChatGPT, AI"
---
ChatGPT and Artifical Inteligence has been making headlines, so I decided to create my own virtual assistant.


[GitHub Coming Soon](/posts/virtual-ai-asst.md)


## Project Summary
This is an on-going project that I have been working on in-between jobs. 
With how quick AI is growing a lot of what I am building now might become obsolete real quick.
Anyways, this AI assistant is built with Python and OpenAI and will have functions similar to Apple's Siri.


## Project Requirements
* Access local weather and traffic info
* Assist with emails and research
* Automate tasks such as: playlist suggestions, turning on lights, etc.


## Project Thoughts
Artificial Inteligence has become a lot more accessible since I first heard about the term in late 2020. My first AI project (predictive text project is a better term) was a rap lyric generator. I copied and pasted a bunch of lyrics into a text file and used [markovify](https://github.com/jsvine/markovify) to generate new lyrics of similar stuctures. What I did back then is pretty simple compared to what we have avaliable to use now.

```python
#my original 2020 "ai" markovify code
while(True):
    with open("train.txt") as f:
        text_model = markovify.Text(f, retain_original=False)

    sentenceA = text_model.make_sentence()
    sentenceB = text_model.make_sentence()
    status = sentenceA + "\n" + sentenceB
    print(status)
```

These days there are many more highly trained models avalibale to use and I don't even need to train the model myself.
People with more resouces and knowledge have trained models that are avaliable to use.
However, due to high API costs, I could not use ChatGPT like I originally planned to.
I ended up using a free Harry Potter trained AI hosted on hugging face.

Now my main goal is to integrate the trained model with the necessary APIs and other software to get them all to work together and make my AI more "assistant-y". 
I decided to use Discord as the interface for my assistant, since it's one of my most used apps.
Currently my AI is capable of holding conversation and accesssing local weather conditions all through Discord.

INSERTING GIF EXAMPLE SOON!

I still need to implement automation and difficult tasks (questions, research, etc.)
However I am limited by API and hosting costs.
I am looking into more affordable alternatives and open to suggestions.
As of now I am happy with the results but it's still a work in progress.
