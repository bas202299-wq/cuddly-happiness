class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        
        // DOM Elements
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        this.totalCount = document.getElementById('totalCount');
        this.activeCount = document.getElementById('activeCount');
        this.completedCount = document.getElementById('completedCount');
        
        this.init();
    }

    init() {
        // Event Listeners
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
        
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
        
        // Initial render
        this.render();
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        
        if (taskText === '') {
            this.taskInput.focus();
            return;
        }
        
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        
        this.tasks.push(task);
        this.save();
        this.taskInput.value = '';
        this.taskInput.focus();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.save();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.save();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            case 'all':
            default:
                return this.tasks;
        }
    }

    clearCompleted() {
        const completedCount = this.tasks.filter(task => task.completed).length;
        
        if (completedCount === 0) {
            alert('No completed tasks to clear!');
            return;
        }
        
        if (confirm(`Clear ${completedCount} completed task(s)?`)) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.save();
            this.render();
        }
    }

    clearAll() {
        if (this.tasks.length === 0) {
            alert('No tasks to clear!');
            return;
        }
        
        if (confirm(`Delete all ${this.tasks.length} task(s)? This cannot be undone.`)) {
            this.tasks = [];
            this.save();
            this.render();
        }
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        
        this.totalCount.textContent = total;
        this.activeCount.textContent = active;
        this.completedCount.textContent = completed;
    }

    render() {
        this.updateStats();
        this.taskList.innerHTML = '';
        
        const filteredTasks = this.getFilteredTasks();
        
        if (filteredTasks.length === 0) {
            this.emptyState.classList.add('show');
            return;
        }
        
        this.emptyState.classList.remove('show');
        
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    data-id="${task.id}"
                >
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button class="delete-btn" data-id="${task.id}">Delete</button>
            `;
            
            // Event listeners for this task
            const checkbox = li.querySelector('.task-checkbox');
            const deleteBtn = li.querySelector('.delete-btn');
            
            checkbox.addEventListener('change', () => this.toggleTask(task.id));
            deleteBtn.addEventListener('click', () => this.deleteTask(task.id));
            
            this.taskList.appendChild(li);
        });
    }

    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});