| # | Date IDd | Bug description | Date resolved | Resolution | Commit | Comments |
|-|-|-|-|-|-|-|
| 1 | 2025-08-13 | `#d100-contents` background does not cover all of `#d100-container` square 'button' area | 2025-08-14 | `#d100-contents{height:80px;}` | [main 1cb5750] Fix #d100-contents background ||
| 2 | 2025-08-26 | `#previous-rolls` fills with random `roll.dieTypes` (expect random number up to and including the `dieType`) | 2025-08-26 | `function rollDie () {let rollRandom = Math.floor(Math.random() * dieType) + 1;}` |
| 3 | 2025-08-26 | `#current-roll` does not populate | 