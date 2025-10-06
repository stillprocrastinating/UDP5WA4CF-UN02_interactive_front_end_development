# UDP5WA4CF-UN02_interactive_front_end_development

IFEDiceRoller is a dice roller (applicable for anything involving rolling dice, namely Dungeons and Dragons), for my Interactive Front End Development milestone project 2 with [Code Institute](https://codeinstitute.net).

Dungeons and Dragons, and other games of chance, involve a lot of rolling dice. This site aims to provide the user with the ability to roll any dice type, cumulate roll totals, save rolls, and reset roll totals.

---

>Visit the homepage [here](https://stillprocrastinating.github.io/UDP5WA4CF-UN02_interactive_front_end_development/).

> Insert AmIResponsive image  
> _Screenshot generated using [AmIResponsive](https://ui.dev/amiresponsive)._

---


## Contents

1. [Introduction](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#introduction)
1. [User Stories](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#user-stories)
1. [Features](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#features)
1. [Credits](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#credits)
1. [Bugs](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#bugs)
1. [Validation](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#validation)
1. [Manual testing](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/#manual-testing)

---


## User Stories

_You may click on any screenshot image to be taken to the fullscreen view (and use the browser back button to return here)._

| # | Description | Goal | Solution |
|-|-|-|-|
| 1 | As a Dungeons and Dragons player, I want to be able to play online without needing my physical dice sets, they're heavy! | Build a dice roller capable of rolling dice types: d2, d4, d6, d8, d10, d12, d20, and d100. | [solution1] |
| 2 | As someone who sometimes finds it hard to make a decision, I want chance to decide for me with a coin-flipper/random-number-generator. | Build a dice roller capable of rolling any whole number. | [solution2] |
| 3 | As a nostalgic D&D player, I want to be able to look back at my best (and worst) rolls! | Build a dice roller capable of saving rolls for reference to thereafter. | [solution3] |
| 4 | As a new gamer, I want to play with digital dice first, so that I can decide whether I like the game before I commit to buying physical dice. | Build a dice roller capable of keeping up with fast-paced gameplay. | [solution4] |
| 5 | As a mathematician, I want to roll repeatedly to see if each dice has the proper averages and save the results. | Build a dice roller capable of rolling multiple die at once and/or cumulatively totalling the number of die rolled and the result number. | [solution5] |

---


## Features

_You may click on any screenshot image to be taken to the fullscreen view (and use the browser back button to return here)._

| Pages | Sizes | Feature | Presentation |
|-|-|-|-|
| All | <992px | Burger navigation menu | 


### Wireframes

_You may click on any screenshot image to be taken to the fullscreen view (and use the browser back button to return here)._

| Pages | Features | Wireframe | Presentation |
|-|-|-|-|
| Homepage

---


## Credits

There is a listed contributor of [Zaneaby](https://github.com/Zaneaby). Although [Zaneaby](https://github.com/Zaneaby) is not me, the work contributed by [Zaneaby](https://github.com/Zaneaby) was mine (however, [Zaneaby](https://github.com/Zaneaby) themself did give me some useful pointers, for which I am thankful). I merely borrowed their computer, pulled in my work, pushed out my updates, and didn't realise I had not successfully changed login credentials in [Visual Studio Code](https://code.visualstudio.com) until afterwards.


### How to...

>View the deployed site on [GitHub](https://github.com/dashboard) Pages, [here](https://stillprocrastinating.github.io/UDP5WA4CF-UN02_interactive_front_end_development/).

>This website was developed using HTML5, CSS3, and JavaScript in [Visual Studio Code](https://code.visualstudio.com). The terminal was used to commit and push to [GitHub](https://github.com/dashboard).  
For a video tutorial by [The Code City](https://www.youtube.com/@TheCodeCity) on [YouTube](https://www.youtube.com), click [here](https://youtu.be/JB7YD7OKm5g?si=6b_75xUimYFwXsza).


#### Deployment steps

1. Log in to [GitHub](https://github.com/dashboard) and locate the GitHub Repository.
1. At the top of the Repository, locate the Settings button on the menu.
1. Scroll down the Settings page until you locate the Pages section.
1. Under Source, click the dropdown called None and select Master/Main Branch.
1. Ensure the branch and directory/folder are saved.
1. Refresh the page until a new section appears at the top of the screen beginning "Your page is live at" and then a link. This link is the deployed/live link of your website homepage (index.html).

For a video tutorial by [AKRITI GOSWAMI](https://www.youtube.com/@akritigoswamiLetsCode) on [YouTube](https://www.youtube.com), click [here](https://www.youtube.com/watch?v=BT4WzyT2g8k).


### Libraries

Inspiration for much of the code was modified directly from the [Code Institute](https://codeinstitute.net) "Love Maths" (repo [here](https://github.com/stillprocrastinating/UDP5WA4CF-TU_love_maths)) and "Simon Game" (repo [here](https://github.com/stillprocrastinating/UDP5WA4CF-TU_simon_game)) walkthrough projects.

The colour randomisation code for `dieColor()` can be found [here](https://stackoverflow.com/a/5365036), written by [Sebastian Simon](https://stackoverflow.com/users/4642212/sebastian-simon) on [this](https://stackoverflow.com/questions/1484506/random-color-generator) [Stack Overflow](https://stackoverflow.com/questions) page submitted by [Milan](https://stackoverflow.com/users/10358768/milan).


### Accessibility

[WebAIM](https://webaim.org/resources/contrastchecker/) was used to check colour contrast between backgrounds and font colours.  
Each stated ratio is the contrast ratio between the background and font colours used. Then the pass/fail mode. Each link should provide full details.

| Object | Ratio | Accessiblity |
|-|-|-|
| [#header-h](https://webaim.org/resources/contrastchecker/?fcolor=FEE8C3&bcolor=30494E) | 8.01 : 1 | pass |
| [#header-p](https://webaim.org/resources/contrastchecker/?fcolor=CC0000E5&bcolor=FEE8C3) | 4.55 : 1 | WCAG AA: pass \| WCAG AAA: fail |
| [#show-instructions-button, #hide-instructions-button, .die-label, td](https://webaim.org/resources/contrastchecker/?fcolor=FEE8C3&bcolor=454731) | 7.97 : 1 | pass |
| [#instructions, #footer-text](https://webaim.org/resources/contrastchecker/?fcolor=FEE8C3&bcolor=6F6B49) | 4.52 : 1 | WCAG AA: pass \| WCAG AAA: fail |
| [.die-keyup](https://webaim.org/resources/contrastchecker/?fcolor=ECA2C7&bcolor=4C4932) | 4.57 : 1 | WCAG AA: pass \| WCAG AAA: fail |
| [noscript, .die-btn, .die-label, .svg-class](https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=FEE8C3) | 17.54 : 1 | pass |
| .die-btn:hover | ? | variable |
| [#roll-results-container, #row-[odd]](https://webaim.org/resources/contrastchecker/?fcolor=454731&bcolor=FEE8C3) | 7.97 : 1 | pass |
| [#previous-rolls-container, #row-[even]](https://webaim.org/resources/contrastchecker/?fcolor=454731&bcolor=EBD7B3) | 6.77 : 1 | WCAG AA: pass \| WCAG AAA: fail |
| [.button-h](https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=AEA27E) | 8.26 : 1 | pass |
| [.delete-1](https://webaim.org/resources/contrastchecker/?fcolor=000000E5&bcolor=EB2026) | 4.52 : 1 | pass |
| [#discord, #github, .link](https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=6F6B49) | 3.87 : 1 | pass |
| [#discord:hover](https://webaim.org/resources/contrastchecker/?fcolor=5865F2&bcolor=2C2B1D) | 3.1 : 1 | pass |
| [#github:hover](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=2C2B1D) | 14.28 : 1 | pass |
| [#footer-text:hover](https://webaim.org/resources/contrastchecker/?fcolor=FEE8C3&bcolor=2C2B1D) | 11.93 : 1 | pass |
| [.link:hover](https://webaim.org/resources/contrastchecker/?fcolor=FF7070E5&bcolor=2C2B1D) | 4.54 : 1 | WCAG AA: pass \| WCAG AAA: fail |


### Images

The die images were sourced from [Gameicons.net](https://game-icons.net).  
_Files can be found under `assets/images/die-buttons-area`._
- The d2 image was [Token icon](https://game-icons.net/1x1/delapouite/token.html) by [Delapouite](https://delapouite.com/).
- The d4 image was [Dice 4 icon](https://game-icons.net/1x1/skoll/d4.html) by [Skoll](https://game-icons.net/).
- The d6 image was [Perspective dice 6 icon](https://game-icons.net/1x1/delapouite/perspective-dice-six.html) by [Delapouite](https://delapouite.com/).
- The d8 image was [Dice 8 faces 8 icon](https://game-icons.net/1x1/delapouite/dice-eight-faces-eight.html) by [Delapouite](https://delapouite.com/).
- The d10 image was [Dice 10 icon](https://game-icons.net/1x1/skoll/d10.html) by [Skoll](https://game-icons.net/).
- The d12 image was [Dice 12 icon](https://game-icons.net/1x1/skoll/d12.html) by [Skoll](https://game-icons.net/).
- The d20 image was [Dice 20 faces 20 icon](https://game-icons.net/1x1/delapouite/dice-twenty-faces-twenty.html) by [Delapouite](https://delapouite.com/).
- The d100 image was a composite of [Dice 10 icon](https://game-icons.net/1x1/skoll/d10.html) by [Skoll](https://game-icons.net/). _Under `assets/images/die-buttons-area`, both the standard `d10.svg` and the 180-degree rotated version, `d10(180).svg`, were used._
- The d-other image was [Perspective dice 6 faces random icon](https://game-icons.net/1x1/delapouite/perspective-dice-six-faces-random.html) by [Delapouite](https://delapouite.com/).

The header and save/reset button background [image](https://www.wallpaperflare.com/fantasy-art-dragon-ultrawide-ultra-wide-wallpaper-gjgct/download) was sourced from [Wallpaper Flare](https://www.wallpaperflare.com/).  
_Files can be found under `assets/images/action-buttons-area`._


#### Favicon

The [favicon](https://github.com/stillprocrastinating/UDP5WA4CF-UN01_user_centric_front_end_development/blob/main/assets/images/d%26d_logo.png) was generated from [the official D&D logo](https://www.enworld.org/resources/d-d-5e-logo-pack.1043/) using [favicon.io](https://favicon.io/favicon-converter/).  
_Files can be found under `assets/images/favicon`._


#### Icons

The saves area image SVGs were sourced from [Lucide](https://lucide.dev).  
_Files can be found under `assets/images/saves-area`._
- The edit image was [square-pen](https://lucide.dev/icons/square-pen).
- The delete image was [trash-2](https://lucide.dev/icons/trash-2).

The [Discord](https://simpleicons.org/?modal=icon&q=discord) and [GitHub](https://simpleicons.org/?modal=icon&q=github) icons were sourced from [Simple Icons](https://simpleicons.org/).  
_Files can be found under `assets/images/footer`._


### Fonts

All fonts were sourced from [Google Fonts](https://fonts.google.com).
- The heading font is called [Eagle Lake](https://fonts.google.com/specimen/Eagle+Lake).
- The body font is called [Poiret One](https://fonts.google.com/specimen/Poiret+One).

---


## Bugs

>For a (truly) exhaustive list of bugs, please see `README/bugs.md`, [here](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development/blob/main/assets/README/bugs.md).  
Major bugs are duplicate listed below.

| # | Date IDd | Bug description | Date resolved | Resolution | Commit | Comments |
|-|-|-|-|-|-|-|
| 2	| 2025-08-26 | `#previous-rolls` fills with random `roll.dieType`s (expect random number up to and including the `dieType`) | 2025-08-26 | `function rollDie () {let rollRandom = Math.floor(Math.random() * dieType) + 1; roll.previousRolls.push(rollRandom);}` | [main 4cdf303] #previous-rolls functions ||
| 3 | 2025-08-26 | `#current-roll` does not populate | 2025-08-26 | `function rollDie () {roll.currentRoll = rollRandom;}` | [main 1274f7f] #current-roll functions ||
| 10 | 2025-09-14 | If `dieOther()` prompt is cancelled, `rollDie()` rolls a 1 (dnull) | 2025-09-14 | `rollDie()` includes `if (dieType === null) {return;}` | [main 30ebe94] dieOther(){cancelled} - functional ||
| 11 | 2025-09-14 | Custom die rolls with special messaging cause double rolls | 2025-09-16 | The `switch` section of `dieOther()` included `rollDie(dieType);` for relevant `case`s, but the relevant `case`s (aka, the numbers) were already being rolled in `if (isNan(dieType) == false) {rollDie(dieType);}` | [main 123ba04] dieOther(){no double rolls} - functional ||
| 17 | 2025-09-28 | Deleting saves still affects multiple rows - specifically when deleting a row with a larger index than an already deleted row | 2025-09-28 | Changed `getElementById(row-${rowN})` to `bin.parentNode.parentNode` | [main 3e93626] deleteSave() deletes correct row repeatedly ||
| 19 | 2025-10-04 | Implementing a check for `isInteger()` doesn't work as I expected | 2025-10-04 | `isInteger()` was sending `false` due to string input | [main 2bc5b87] Update user story 2 | #duh |


### Residual bugs

_You may click on any screenshot image to be taken to the fullscreen view (and use the browser back button to return here)._

| Identified | Bug | Attempted resolution | Evidence |
|-|-|-|-|
| 2025-05-15 15:16 | The homepage footer 'GitHub' icon does not execute click functionality - loading my GitHub page in a new tab | I double checked that the HTML was correct, including the link itself, and found no issues // the issue itself is that "github.com took too long to respond" - my connection is good, the proxy and firewall are fine, Windows Network Diagnostics troubleshooting couldn't identify the problem, and my GitHub page loads fine when prompted from usual means // after the `git commit` in the VSCode terminal from writing this section, the browser screen in the 'Evidence' column changed by itself to the correct page... `¯\_(ツ)_/¯` // I've also just had GitHub not load from a reload, so this might even be on their end | ![A screenshot of the browser showing 'the site can't be reached' messaging](https://github.com/stillprocrastinating/UDP5WA4CF-UN01_user_centric_front_end_development/blob/main/assets/images/readme/bugs/screenshot_2025-05-15_151931.png) |

>Replace above with relevent stuff

---


## Validation


### [Jigsaw W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)

styles.css

| Line | Selector | Error | Resolution | Commit |
|-|-|-|-|-|
| 314 | `.stars i.active` | Value Error : color Too many values or values are not recognized : `1px solid var(--color-dnd-red-dark)` | `.stars i.active {color: var(--color-dnd-red-dark);}` |

>Replace above with relevent stuff

styles.css ![Valid CSS!](https://jigsaw.w3.org/css-validator/images/vcss)

| Line | Warning | Comments |
|-|-|-|
| 1 | Imported style sheets are not checked in direct input and file upload modes | `@import url('https://fonts.googleapis.com/css2?family=Eagle+Lake&display=swap'); /* font h */` |

>Replace above with relevent stuff


### [W3C Markup Validation Service](https://validator.w3.org)

404.html

| Line | Element | Error | Resolution | Commit |
|-|-|-|-|-|
| From line 25, column 13; to line 25, column 37 | `<p class="text nav-text">` | Element `p` not allowed as child of element `button` in this context. (Suppressing further errors from this subtree.) | `<button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle story selection navigation" title="Select a story" class="nav-button text nav-text">Story select</button>` |

>Replace above with relevent stuff

404.html Document checking completed. No errors or warnings to show.


### [jslint.com](https://www.jslint.com)

discord.js

| Line | Element | Warning | Comments | Commit |
|-|-|-|-|-|
| 2 | `alert("Feel free to drop me a message! My Discord name is .stillprocrastinating");` | 1. Line is longer than 80 characters. |

>Replace above with relevent stuff

---


## Manual testing

>BELOW IS ALL COPY-PASTE FROM PROJECT 1 - - - REPLACE WITH RELEVENT STUFF


### Phone

| Datetime | Test | Expectation | Completion |
|-|-|-|-|
|| ___Full stories page___ | Temporary - will be replaced with an [Amazon](https://https://www.amazon.co.uk) link ||
| 2025-05-15 19:57 | The full stories page loads from the form success page 'Full stories' link | The full stories page is visually loaded | Failure - the fixed footer overlaps the 'Teleport home' button in an unaesthetic and non-functional way - click [here](https://github.com/stillprocrastinating/UDP5WA4CF-UN01_user_centric_front_end_development/tree/main#residual-bugs) for residual bug info |


### Tablet

I do not own a tablet.  
2025-05-15 19:38 I asked a friend, David, whether he would take a look at my website on his tablet.  
2025-05-15 21:37 David responded as follows:
>Okay so feedback  
>Using it on tablet it looks and works fine. No issues. Resizes when rotating between portage and landscape with no issues. All visible and readable at default size. Different theming is fun and ads to the pages.
Floating header stays at top.  
>Email could be a mail to such as mailto:john@example.com. this opens up people's email client with the email.  
>Can't access the Facebook page, could be a Facebook thing.
>Feedback from is fine, but it wasn't immediately clear that I couldn't submit because the email was incorrect. A red box or some text to help indicate would be good. I noticed the website does put you editable in the email field which is helpful.
>Animations are smooth and aren't distracting.
>I encountered no bugs or issues with pages, the layout seemed fine.
>By floating header stays at top I mean top of your screen so is always accessible. Which works fine.

| Test | Expectation | Completion |
|-|-|-|
| ___Sitewide___ |||
| The pages load | Each page is visually loaded | Success |


### Laptop

I do not own a laptop.  
2025-05-15 19:42 I asked a friend, Alex, whether he would take a look at my website on his laptop.  
2025-05-15 21:47 Alex responded as follows:
>I had a look through your site for about 5-10 minutes on a laptop and didn't find any visual issues, used as many links as I could see 🙂  

Later, he told me verbally that he likes that the links open in new tabs and other sites which don't do this irritate him.

| Test | Expectation | Completion |
|-|-|-|
| ___Sitewide___ |||
| The pages load | Each page is visually loaded | Success |


### Desktop

| Datetime | Test | Expectation | Completion |
|-|-|-|-|
|| ___Homepage___ |||
| 2025-05-15 14:19 | The homepage loads from the deployment link | The homepage is visually loaded | Success |

---
---

> Insert AmIResponsive image  
> _Screenshot generated using [AmIResponsive](https://ui.dev/amiresponsive)._

---
---

For anyone crazy enough to have made it down here, I hope you found the info you're looking for!

On a similar note, Raghav, thank you, I really appreciate you :)

[↑ Return to top](https://github.com/stillprocrastinating/UDP5WA4CF-UN02_interactive_front_end_development)



