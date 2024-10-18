# Validate Parentheses

## Problem Statement

You are given a string s consisting of the following characters: `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`.

The input string s is valid if and only if:

- Every open bracket is closed by the same type of close bracket.
- Open brackets are closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
- Return true if s is a valid string, and false otherwise.

### Example 1

- **Input:** `s = "[]"`
- **Output:** `true`

### Example 2

- **Input:** `s = "([{}])"`
- **Output:** `true`

### Example 3

- **Input:** `s = "[(])""`
- **Output:** `false`

### Constraints

- `31 <= s.length <= 1000`

---

## Solution

1. We can solve this problem using a stack. First take a map ans store for every cloing parentheses as key and opening ones as value.
2. Run a for loop on the string and check two conditions:
   - If the current element is not present in the map, means its an opening bracket, then push that in the stack and continue.
   - If present then check the last element of the stack is same as current element, if same pop the last element from the stack and continue.
3. Return true if the stack is empty.
