---

title: "🚀 ጸረ አሉታዊ Bot"
description: "A Telegram bot that automatically detects and removes hate speech from group chats using NLP."
date: "2025-02-20"
coverImage: "/photoasset/tserepng.png"
github: "https://github.com/Dawittekle/TsereAlutawi"
tech: ["Python", "python-telegram-bot", "NLP", "dotenv"]
---------------------------------------------------------

![logo](/photoasset/tserepng.png)

A powerful **Telegram bot** that detects and removes hate speech in group chats using **NLP**. It warns users, notifies admins, and automatically removes repeat offenders.

👉 Try it here: [@tserealutawi\_bot](https://t.me/tserealutawi_bot)

---

## ✨ Features

- ✅ **Auto-Delete Hate Speech** – Instantly removes offensive messages
- ✅ **User Warning System** – Issues up to 5 warnings before removal
- ✅ **Auto-Kick Offenders** – Users with 5 warnings are removed
- ✅ **Admin Notifications** – Alerts admins about violations
- ✅ **Admin Management** – Add or remove admins easily

---

## 🧰 Tech Stack

- 🐍 Python
- 🤖 Telegram Bot API (`python-telegram-bot`)
- 🧠 NLP Model (Hate Speech Detection)
- ⚙️ `python-dotenv` for environment variables

---

## ⚙️ Installation

### ✅ Prerequisites

- Python 3.8+
- A **Telegram Bot Token** (from [@BotFather](https://t.me/BotFather))

### 🚀 Steps

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/hate-speech-monitor-bot.git
cd hate-speech-monitor-bot
```

2️⃣ **Install Dependencies**

```bash
pip install -r requirements.txt
```

3️⃣ **Create `.env` File**

```env
BOT_TOKEN=your-telegram-bot-token
```

4️⃣ **Run the Bot**

```bash
python bot.py
```

---

## 📌 Commands

**User Commands**

- `/help` – Show available commands
- `/id` – Get your Telegram user ID

**Admin Commands**

- `/addadmin <user_id>` – Add an admin
- `/removeadmin <user_id>` – Remove an admin
- `/listadmins` – List all admins
- `/unban <user_id>` – Unban a user and reset warnings

---

## 🤖 How It Works

1. The bot **monitors messages** in your group
2. If a message contains **hate speech**, it is **deleted**
3. The user receives a **warning** privately
4. After **5 warnings**, the user is **removed** from the group
5. **Admins are notified** about violations

---

## ⚠️ Notes

- The bot must have **Admin permissions** in your Telegram group
- Admins can manage the bot with the provided commands

---

## 👥 Author

**Dawit Teklebrhan**
GitHub: [@Dawittekle](https://github.com/Dawittekle)

---

## 🤝 Contributing

Want to add **multi-language support** or new features? Open a pull request or contact me!

---

🔥 Developed with ❤️ to keep communities safe!
