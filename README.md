# 📝 To-Do List Application

A modern, fully-functional to-do list web application with local storage persistence. Keep track of your tasks and stay organized!

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Quickly add new tasks with Enter key or button click
- ✅ **Mark Complete** - Click checkbox to toggle task completion status
- ✅ **Delete Tasks** - Remove individual tasks with one click
- ✅ **Persistent Storage** - All tasks are automatically saved to browser local storage
- ✅ **Data Persistence** - Tasks survive page refreshes and browser restarts

### Advanced Features
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Statistics** - Real-time counters for total, active, and completed tasks
- 🧹 **Clear Actions** - Clear all completed tasks or clear everything
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Beautiful transitions and hover effects
- 🎨 **Modern UI** - Gradient backgrounds, rounded corners, and intuitive design

## 🚀 Getting Started

### Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation needed

### How to Use

1. **Open the Application**
   - Simply open `index.html` in your web browser

2. **Add a Task**
   - Type your task in the input field
   - Press Enter or click the "Add" button

3. **Manage Tasks**
   - **Check** the checkbox to mark a task as complete
   - **Click Delete** to remove a task

4. **Filter Tasks**
   - Click "All" to see all tasks
   - Click "Active" to see incomplete tasks
   - Click "Completed" to see finished tasks

5. **Clear Tasks**
   - Click "Clear Completed" to remove all finished tasks
   - Click "Clear All" to delete all tasks (you'll be asked to confirm)

## 📂 File Structure

```
├── index.html       # HTML structure and layout
├── styles.css       # Modern styling and responsive design
├── script.js        # JavaScript application logic
└── README.md        # Documentation (this file)
```

## 🔧 Technical Details

### HTML (index.html)
- Semantic HTML5 structure
- Accessible form controls
- Organized sections for different features
- Mobile viewport meta tag

### CSS (styles.css)
- **Responsive Layout** - Mobile-first design approach
- **Gradient Background** - Beautiful purple gradient background
- **Smooth Animations** - Fade-in and slide-up effects
- **Custom Scrollbar** - Styled scrollbar for the task list
- **Hover Effects** - Interactive feedback for user actions
- **Flexbox Layout** - Modern responsive layout technique

### JavaScript (script.js)
- **TodoApp Class** - Object-oriented design pattern
- **Local Storage API** - Automatic data persistence
- **Event Handling** - Keyboard and click event listeners
- **DOM Manipulation** - Dynamic rendering of tasks
- **Filter Logic** - Efficient task filtering
- **Data Validation** - Input sanitization and XSS prevention

## 💾 Local Storage

This application uses the browser's Local Storage API to persist data:

- **Storage Key**: `tasks`
- **Format**: JSON array of task objects
- **Capacity**: Typically 5-10MB per domain
- **Persistence**: Data survives browser restarts
- **Privacy**: Data is stored locally, never sent to servers

### Task Object Structure
```javascript
{
  id: 1234567890,           // Unique timestamp-based ID
  text: "Task description", // Task text
  completed: false,         // Completion status
  createdAt: "5/18/2026"   // Creation timestamp
}
```

## 🎨 Customization

### Change Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Fonts
Change the font-family in `styles.css`:
```css
font-family: 'Your Font Name', serif;
```

### Add New Features
Extend the `TodoApp` class in `script.js` to add:
- Task categories/tags
- Due dates
- Priority levels
- Task editing
- Search functionality

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Tips & Tricks

1. **Quick Add**: Press Enter instead of clicking the button
2. **Bulk Clear**: Use "Clear Completed" regularly to organize your list
3. **Filter View**: Switch between filters to focus on active tasks
4. **Offline Use**: Works completely offline - no internet needed
5. **Data Export**: Your data is in Local Storage - you can export it anytime

## ⚠️ Notes

- Tasks are stored in browser Local Storage (not synced across devices)
- Clearing browser data/cache may delete saved tasks
- Each domain has its own separate storage
- No user account or login required

## 📝 License

Free to use, modify, and share!

## 🤝 Contributing

Feel free to fork, modify, and improve this application!

---

**Happy task management!** 🎉