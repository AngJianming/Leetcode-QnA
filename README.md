# 🧠 LeetCode Challenge QnA by AngJianming

Welcome to my personal LeetCode Challenge QnA repository! 🚀  
This repo serves as a growing collection of my solutions, explanations, and thought processes while tackling algorithm and data structure problems on LeetCode.

---

## 📌 Purpose

I started this repository to:

- Practice problem-solving and improve my coding skills 🔧
- Prepare for technical interviews 🎯
- Track my progress and reflect on my growth 💡
- Share clean, well-commented solutions and approaches for future reference and for others to learn from 📘

---

## 🛠 Tech Stack

- **Language**: Mainly `Python`, but I occasionally solve problems in `JavaScript`, `Java`, `Go`, `Rust`, `C++` or `C` depending on the challenge.
- **Platform**: [LeetCode Profile](https://leetcode.com/u/AngJM/)
- **Editor**: VS Code / LeetCode Extension

---

## Each file includes
✅ Problem link

🔥 Difficulty ranging from: <div>
<img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /> <!-- Easy -->
<img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /> <!-- Mid -->
<img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /> <!-- Hard -->
</div>

❓ Problem question

🧠 Thought process

💡 Approach

⌛ Time and Space Complexity

📝 Final Code


## How I make those README.md files with Leetcode Questions

```bash
npm install -g leetcode-cli
```

<div align="justify">
Install the nesasary dependencies for leetcode
</div>

<br>

```bash
leetcode user -l
```

<div align="justify">
This is to login via cli, it should then asked you to login to your leetcode username and password
</div>

[leetcode-cli](https://github.com/skygragon/leetcode-cli)

<br>

```bash
leetcode show 1016 -g -l <your lang> >
```

<div align="justify">
I personally code using WSL Ubuntu 24.04 but you can use Windows or Mac as well just translate it to your terminal lang. But basically, this helps you to <b>scrape</b> the information and create a markdown format based on your LeetCode questions.
</div>