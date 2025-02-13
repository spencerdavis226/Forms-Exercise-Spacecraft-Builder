🚀 Spacecraft Builder

Overview

The Spacecraft Builder is a React application that allows users to design a spacecraft by adding and managing items in an inventory. Users can input an item’s name, quantity, and purpose, and the app dynamically updates the inventory. Items can also be removed from the inventory.

This project is an exercise in React forms, focusing on:
• Controlled components
• Form validation
• State management
• Parent-child component communication

🛠 Features

✅ Add items to an inventory with a name, quantity, and purpose
✅ Display inventory items dynamically
✅ Remove items from the inventory
✅ Basic form validation to ensure required fields are filled
✅ Component-based architecture

💻 Technologies Used
• React – Component-based UI framework
• CSS Modules – Scoped component styling
• UUID – Generating unique IDs for inventory items
• PropTypes – Type checking for React props

📌 How It Works

    1.	Users fill out the form in ItemForm.jsx and submit an item.
    2.	The parent component (SpacecraftBuilder.jsx) updates the inventory state.
    3.	The inventory is displayed in InventoryDisplay.jsx, where each item is shown using ItemCard.jsx.
    4.	Users can remove items using ItemAction.jsx, which triggers the delete function in SpacecraftBuilder.jsx.

📜 License

This project is for educational purposes. Feel free to modify and expand it.
