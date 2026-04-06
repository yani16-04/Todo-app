/* Reset and base styles */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #9be15d, #00e3ae);
  overflow-x: hidden;
  position: relative;
}

/* Decorative floating shapes */
body::before, body::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 0;
  filter: blur(60px);
}

body::before {
  top: -80px;
  left: -80px;
}

body::after {
  bottom: -100px;
  right: -100px;
}

/* Container with glassmorphism */
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  z-index: 1;
  position: relative;
}

/* Header */
h1 {
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Input Group */
.input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.input-group input {
  flex: 1 1 auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
}

#task-input, #task-date, #task-time {
  background: rgba(255,255,255,0.8);
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Task list */
ul {
  list-style: none;
  padding: 0;
}

li {
  background: rgba(255, 255, 255, 0.85);
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Task content */
.task-info {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.task-datetime {
  font-size: 0.9rem;
  color: #555;
  margin-left: 10px;
}

/* Buttons */
.task-buttons button {
  margin-left: 5px;
  background-color: #6c757d;
}

.task-buttons button.edit {
  background-color: #ffc107;
}

.task-buttons button.delete {
  background-color: #dc3545;
}

@media (max-width: 500px) {
  .input-group {
    flex-direction: column;
  }

  button {
    width: 100%;
  }

  .task-buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
