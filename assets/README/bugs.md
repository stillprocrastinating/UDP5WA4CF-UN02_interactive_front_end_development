| # | Date IDd | Bug description | Date resolved | Resolution | Commit | Comments |
|-|-|-|-|-|-|-|
| 1 | 2025-08-13 | `#d100-contents` background does not cover all of `#d100-container` square 'button' area | 2025-08-14 | `#d100-contents{height:80px;}` | [main 1cb5750] Fix #d100-contents background ||
| 2 | 2025-08-26 | `#previous-rolls` fills with random `roll.dieTypes` (expect random number up to and including the `dieType`) | 2025-08-26 | `function rollDie () {let rollRandom = Math.floor(Math.random() * dieType) + 1; roll.previousRolls.push(rollRandom);}` |
| 3 | 2025-08-26 | `#current-roll` does not populate | 2025-08-26 | `function rollDie () {roll.currentRoll = rollRandom;}` |
| 4 | 2025-08-26 | `#previous-rolls` text will eventually break out of the device width | 2025-08-26 | `#previous-rolls{word-wrap: break-word;}` |
| 5 | 2025-08-30 | `savedRolls.save1` isn't accessible across pages in `saves.html` `#save-roll-1` | 2025-08-31 | `#saves-area` moved into `index.html` (`saves.html` deleted) |
| 6 | 