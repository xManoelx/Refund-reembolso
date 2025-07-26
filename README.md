# 💰 Refund - Personal Expense Tracker Application

A comprehensive expense tracking application built with vanilla JavaScript featuring real-time currency formatting, categorized expense management, and dynamic financial calculations. Designed for personal finance management with an intuitive interface and robust data handling capabilities.

## 📸 Preview

<img width="1138" height="527" alt="image" src="https://github.com/user-attachments/assets/a389f158-ab04-4e12-8c1b-3216bf522830" />

*Clean and professional expense tracking interface with real-time calculations and categorized expenses*

## 📋 About This Project

This project is a complete personal finance management application that demonstrates advanced JavaScript programming through practical financial functionality. The app provides comprehensive expense tracking with real-time currency formatting, category-based organization, dynamic calculations, and an intuitive user interface designed for daily financial management.

### Core Functionality:
- **Real-Time Currency Formatting** - Automatic BRL currency formatting as you type
- **Categorized Expenses** - Organize expenses by category with visual icons
- **Dynamic Calculations** - Live total updates and expense counting
- **Expense Management** - Add and remove expenses with instant feedback
- **Visual Feedback** - Category icons and professional styling
- **Input Validation** - Robust form validation and error handling

## 🛠️ Technologies Used

- **HTML5** - Semantic form structure and accessibility features
- **CSS3** - Modern styling with responsive design and visual hierarchy
- **JavaScript (ES6+)** - Advanced DOM manipulation and financial calculations
  - **Real-Time Input Formatting** - Currency formatting during user input
  - **Dynamic DOM Creation** - Programmatic HTML element generation
  - **Event Delegation** - Efficient event handling for dynamic content
  - **Regular Expressions** - Input validation and currency parsing
  - **Financial Calculations** - Precise monetary arithmetic and formatting

## 🎯 Features

- ✅ **Real-Time Currency Formatting** - Automatic BRL formatting as you type
- ✅ **Category-Based Organization** - Visual categorization with SVG icons
- ✅ **Dynamic Financial Calculations** - Live total updates and expense counting
- ✅ **Robust Input Validation** - Prevents invalid entries and data corruption
- ✅ **Interactive Expense Management** - Add and remove expenses seamlessly
- ✅ **Professional Interface** - Clean, intuitive design for financial data
- ✅ **Error Handling** - Comprehensive try-catch blocks for reliability

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/xManoelx/expense-tracker-app.git
   cd expense-tracker-app
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file

3. **Using the application**
   - Enter expense name in the text field
   - Select category from dropdown menu
   - Enter amount (automatically formatted as BRL currency)
   - Click "Adicionar despesa" to add to your expense list
   - Click remove icon to delete individual expenses
   - View real-time totals in the sidebar

## 💰 Currency Handling

### Real-Time Formatting:
```javascript
// Automatic currency formatting as user types
amount.oninput = () => {
    let value = amount.value.replace(/[^0-9.]/g, '');
    value = Number(value) / 100;
    amount.value = formatCurrencyBRL(value);
}
```

### Financial Calculations:
- **Input Processing** - Converts user input to standardized currency format
- **Precise Arithmetic** - Handles monetary calculations with proper precision
- **Display Formatting** - Formats totals using Brazilian locale standards
- **Validation** - Ensures all monetary values are valid numbers

## 🏗️ Application Architecture

### Core Components:

**Form Handling:**
- Real-time input validation and formatting
- Category selection with dynamic icon assignment
- Comprehensive form submission processing

**Expense Management:**
- Dynamic expense object creation with timestamps
- Category-based organization with visual indicators
- Seamless expense addition and removal

**Financial Calculations:**
- Live total calculation across all expenses
- Expense counting with proper pluralization
- Currency parsing and arithmetic operations

**DOM Manipulation:**
- Programmatic HTML element creation
- Dynamic content rendering and updates
- Event delegation for interactive elements

## 📊 Data Structure

### Expense Object:
```javascript
{
    id: new Date().getTime(),           // Unique timestamp ID
    expense: "Expense name",            // User-entered description
    category_id: "category_id",         // Category identifier for icons
    category_name: "Category Name",     // Human-readable category
    amount: "R$ 150,00",               // Formatted currency amount
    created_at: new Date()             // Creation timestamp
}
```

## 🎨 User Experience Features

- **Real-Time Feedback** - Instant visual updates with every interaction
- **Professional Styling** - Clean, modern interface suitable for financial data
- **Category Visualization** - SVG icons for easy expense categorization
- **Responsive Design** - Optimized for desktop and mobile devices
- **Error Prevention** - Input validation prevents invalid data entry

## 📚 What I Learned

This project significantly enhanced my JavaScript and web development skills in:

- **Advanced DOM Manipulation** - Dynamic HTML element creation and management
- **Financial Application Development** - Handling monetary calculations and formatting
- **Real-Time Input Processing** - Live data validation and formatting
- **Event-Driven Architecture** - Complex user interaction handling
- **Regular Expressions** - Advanced pattern matching for data validation
- **Error Handling** - Comprehensive try-catch error management
- **User Experience Design** - Creating intuitive financial interfaces

## 🌟 Technical Highlights

- **Real-Time Currency Formatting** - Live BRL formatting during user input
- **Dynamic Element Creation** - Programmatic HTML generation with event binding
- **Financial Precision** - Accurate monetary calculations and display
- **Event Delegation** - Efficient handling of dynamically created elements
- **Input Sanitization** - Robust validation preventing data corruption
- **Professional Error Handling** - Comprehensive try-catch blocks throughout

## 🚀 Advanced JavaScript Concepts

- **Regular Expressions** - Complex pattern matching for currency validation
- **Template Manipulation** - Dynamic HTML generation with proper escaping
- **Event Bubbling** - Utilizing event propagation for efficient interaction handling
- **Number Formatting** - Brazilian locale currency formatting with Intl API
- **DOM Traversal** - Navigation through DOM hierarchy for data extraction

## 💼 Real-World Application

This expense tracker demonstrates production-ready features:

- **Data Validation** - Prevents invalid entries and maintains data integrity
- **User Feedback** - Clear error messages and visual confirmations
- **Performance** - Efficient DOM operations and memory management
- **Scalability** - Architecture ready for database integration
- **Accessibility** - Semantic HTML and proper form labeling

## 🔄 Future Improvements

- [ ] Add localStorage for data persistence across sessions
- [ ] Implement expense editing functionality
- [ ] Create expense filtering and search capabilities
- [ ] Add expense categories customization
- [ ] Implement data export (CSV, PDF) functionality
- [ ] Add expense analytics and reporting features
- [ ] Create budget tracking and alerts system

## 👨‍💻 Author

**Manoel Antonio**
- Junior Robot Programmer transitioning to Full Stack Development
- GitHub: [@xManoelx](https://github.com/xManoelx)
- Location: Caxias do Sul, RS, Brasil

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*From industrial robotics to financial applications - building practical solutions with advanced JavaScript and user-centered design! 🤖💰*
