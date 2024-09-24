# Blind 75 JavaScript

This repository contains solutions to the **Blind 75 Data Structures and Algorithms (DSA)** problems implemented in **JavaScript**. Each solution is organized into topic-based folders, and every problem has its own sub-folder containing both the **JavaScript solution** and a **README** explaining the problem statement and solution approach.

## Repository Structure

The repo is organized as follows:

- **Each topic** (e.g., Arrays & Hashing, Sliding Window) has its own folder.
- **Each problem** within a topic is located in a separate sub-folder that includes:
  - A **JavaScript file** (`solution.js`) containing the coded solution.
  - A **README file** (`README.md`) that describes:
    - Problem statement
    - Example inputs/outputs
    - Constraints
    - Solution approach and explanation

### List of Topics

This repository is divided into the following topics:

1. **Arrays & Hashing**
2. **Two Pointers**
3. **Sliding Window**
4. **Stack**
5. **Binary Search**
6. **Linked List**
7. **Trees**
8. **Heap / Priority Queue**
9. **Backtracking**
10. **Tries**
11. **Graphs**
12. **Advanced Graphs**
13. **1-D Dynamic Programming**
14. **2-D Dynamic Programming**
15. **Greedy**
16. **Intervals**
17. **Math & Geometry**
18. **Bit Manipulation**

### Folder Structure Example

Here is an example of how the folders are structured within the repository:

```
Blind-75-JavaScript/
│
├── Arrays & Hashing/
│   ├── Contains Duplicate/
│   │   ├── solution.js
│   │   └── README.md
│   ├── Two Sum/
│   │   ├── solution.js
│   │   └── README.md
│   └── ...
│
├── Sliding Window/
│   ├── Longest Substring Without Repeating Characters/
│   │   ├── solution.js
│   │   └── README.md
│   └── ...
│
└── Trees/
    ├── Binary Tree Inorder Traversal/
    │   ├── solution.js
    │   └── README.md
    └── ...
```

### Problem Details in README

Each problem folder includes a detailed `README.md` file that covers the following:

- **Problem Statement:** Explanation of the problem, input/output examples, and constraints.
- **Solution Approach:** Step-by-step breakdown of the thought process and algorithm used to solve the problem.
- **Example Code:** The corresponding solution implemented in JavaScript.

### Example Problem README

Below is a sample `README.md` structure for a problem:

```markdown
# Two Integer Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.  
You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.  
Return the answer with the smaller index first.

### Example 1:

- **Input:** `nums = [3, 4, 5, 6], target = 7`
- **Output:** `[0, 1]`

### Example 2:

- **Input:** `nums = [4, 5, 6], target = 10`
- **Output:** `[0, 2]`

### Example 3:

- **Input:** `nums = [5, 5], target = 10`
- **Output:** `[0, 1]`

---

## Solution

1. Create a map (object) to store the previously seen elements and their indices.
2. Loop through the `nums` array and calculate the complement for each element as `complement = target - nums[i]`.
3. Check if the complement is already present in the map:
   - If present, retrieve the index of the complement from the map and return it along with the current index.
4. If not present, store the current element in the map as the key and its index as the value.
5. If no valid pair is found by the end of the loop, return `[-1, -1]` as the default case (though this should never occur based on the problem constraints).
```

### Contribution

Feel free to raise an issue or make a pull request if you find a bug or want to add improvements. Contributions to this repository are welcome!

<p align='center'>Build with ❤️ and ☕️ by Debajit Mallick</p>
