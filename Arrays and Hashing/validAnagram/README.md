# Anagram Check

## Problem Statement

Given two strings `s` and `t`, return `true` if the two strings are anagrams of each other; otherwise, return `false`.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

### Example 1:

- **Input:** `s = "racecar"`, `t = "carrace"`
- **Output:** `true`

### Example 2:

- **Input:** `s = "jar"`, `t = "jam"`
- **Output:** `false`

---

## Solution

1. Check if the lengths of `s` and `t` are different:
   - If the lengths don't match, return `false` immediately.
2. Create two maps (`countS` and `countT`) using normal objects to store the character frequencies for both `s` and `t`.

3. Loop through both strings:

   - For each character, set it as a key in the respective map and store its frequency as the value.

4. Loop through one of the maps (e.g., `countS`) and for each key (character), check if the value (frequency) matches the corresponding value in the other map (`countT`).

5. If any character's frequency doesn't match, return `false`.

6. If all characters match, return `true` at the end of the program.
