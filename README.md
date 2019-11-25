# Core
Invite, Plan &amp; Organize

Create and manage social events, tickets, surveys, organizing team, volunteers and logistics


---
title: 'Core'
---

Core: Invite, Plan &amp; Organize
===
![build](https://img.shields.io/appveyor/ci/:user/:repo.svg)


## Table of Contents

[TOC]

## Beginners Guide

If you are a total beginner to this, start here!

1. Visit hackmd.io
2. Click "Sign in"
3. Choose a way to sign in
4. Start writing note!

User story
---

```gherkin=
Feature: New Page: Discussion Board
  Scenario: User clicks Discussion Page
    Given the user is signed in
    When the user visits discussion page
    Then the user joins the discussion

```
> I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. [name=Bill Gates]


```gherkin=
Feature: Discussion Board
  As a User
  I want to share parts of the thread on social media
  Because I want to show it to my friends

  Scenario: User clicks share discussion button
    Given User is logged-in
    When user is in discussions page
    And user clicks share discussion button
    Then a "Share discussion" action pops up
    And user can choose various social media platform
    And user presses "Share"
```


User flows
---
```sequence
User->Discussion Forum: Clicks
Note right of Bob: On the sidebar
Discussion Forum-->User: 
Note left of Discussion Forum: Is user logged in 
Discussion Forum->User: Welcome to discussion forum 
```

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`
