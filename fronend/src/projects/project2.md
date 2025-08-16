---

title: "🎉 Event-Booking (Venue Link)"
description: "A web platform that connects individuals and organizations with venue owners for all types of events."
date: "2025-02-21"
coverImage: "/photoasset/event1.png"
github: "[https://github.com/Dawittekle/event-booking](https://github.com/Dawittekle/event-booking)"
tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
----------------------------------------------------

![home page](/photoasset/event1.png)

A web platform that connects individuals and organizations with venue owners for all types of events. Whether you're planning a wedding, corporate event, or concert, **Venue Link** helps you find and book the perfect venue — quickly and effortlessly.

## 📝 Description

**Venue Link** bridges the gap between event organizers and venue owners. Users can easily browse, find, and book venues for:

- 💍 Weddings
- 🏢 Corporate Events
- 🛍️ Trade Shows
- 🚀 Product Launches
- 🎓 Graduations
- 🎶 Concerts
- 🎉 Private Parties
- 🎤 Conferences
- 📚 Seminars
- 🛠️ Workshops

Venue owners can register and manage their listings, making their venues visible and bookable to a broad audience. This system reduces the time and stress involved in finding and securing event spaces.

---

## 🧰 Tech Stack

---

## ⚙️ Installation

To run the Event-Booking project locally, follow the steps below. We recommend using **XAMPP** as your local development environment.

### ✅ Prerequisites

- [XAMPP](https://www.apachefriends.org/) (includes PHP, MySQL, and Apache)

### 🚀 Steps

1️⃣ **Download or Clone the Repository**

```bash
git clone https://github.com/Dawittekle/event-booking.git
```

2️⃣ **Move the Project to XAMPP**
Copy the project folder (`event-booking`) into your XAMPP `htdocs` directory:

```
C:\xampp\htdocs\
```

3️⃣ **Start XAMPP Services**

- Start **Apache** and **MySQL** from the XAMPP Control Panel

4️⃣ **Set Up the Database**

- Go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
- Click on **Import** → Select `event_booking.sql` (from the project folder)
- Click **Go** to create the database schema and tables

5️⃣ **Configure Database Connection**
Edit `config.php` or `db.php`:

```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "event_booking"; // Match the imported DB name
```

6️⃣ **Run the Application**
Open in browser:

```
http://localhost/event-booking
```

---

## 📸 Screenshots

- 🏠 Homepage

[XAMPP](https://www.apachefriends.org/)

- 📋 Venue Listings

- 📝 Booking Form

- 📊 Dashboard

- 🧾 Register Form

---

## 📌 Usage Notes

- 📂 Use the provided SQL file to initialize the database
- 👤 Users must **register** and **log in** to book venues
- 🏢 Venue owners must **register their venue** through the portal

---

## 👥 Author

**Dawit Teklebrhan**
GitHub: [@Dawittekle](https://github.com/Dawittekle)

Special thanks to the team members who contributed to the development of this project.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.
