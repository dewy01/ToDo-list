var toggleCheck = function () {
    // Create a variable to refer the to-do list, that is, the parent node of the checkbox
    var todoItem = this.parentNode;
  
    // Use the classList property to toggle the class checked
    todoItem.classList.toggle('checked');
  };
  
  var deleteTodo = function () {
    // Create a variable to refer the to-do list, that is, the parent node of the delete button
    var todoItem = this.parentNode;
  
    // Remove the list item using the .remove() function
    todoItem.remove();
  };
  
  var addTodo = function (todo) {
    var li = document.createElement('li');
  
    var label = document.createElement('label');
    label.innerHTML = todo;
  
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
  
    // Write code to trigger the toggleCheck function once the checkbox is clicked
    checkbox.onclick = toggleCheck;
  
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete';
  
    // Write code to trigger the deleteTodo function once the delete button is clicked
    deleteButton.onclick = deleteTodo;
  
    // Nest todo elements in list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
  
    // Write code to append todo element in list with "todoList" id
    var todoList = document.getElementById('todoList');
    todoList.appendChild(li);
  };
  
  document.getElementById('add').onclick = function () {
    // Store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // Store the input, which is the first child element of the .addTodo <div>
    var addTextInput = parent.children[0];
    // Make sure that the input's value is not empty in the following if condition
    if (addTextInput.value.trim() === '') {
      return;
    } else {
      // Add todo
      addTodo(addTextInput.value);
  
      // Reset input
      addTextInput.value = '';
    }
  };
  