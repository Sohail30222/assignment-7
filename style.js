
function addTask() {
    // Input aur ul ko pakad lo
    const input = document.getElementById('same');
    const taskList = document.getElementById('taskList');


    // Input se value le lo aur trim karo
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

   const li = document.createElement('li');
   li.style.display = "flex";
   li.style.justifyContent = "space-between";
   li.style.alignItems = "center";
   li.style.marginTop = "5px";

    // Task ka text daalo
    li.textContent = taskText;

    // Buttons ke liye span banao
    const buttons = document.createElement('span');
    // buttons.style.marginLeft = "90px";

    // ✔ button banao
    const doneBtn = document.createElement('button');
    doneBtn.textContent = "✔";
    doneBtn.style.marginRight = "8px";
    doneBtn.onclick = function() {
        
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    };

    // 🗑️ button banao
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "🗑️";
    // deleteBtn.style.marginLeft = "6%"
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };


    // Buttons ko span mein add karo
    buttons.appendChild(doneBtn);
    buttons.appendChild(deleteBtn);

    // Span ko li mein add karo
    li.appendChild(buttons);

    // Li ko ul mein add karo
    taskList.appendChild(li);

    // Input clear karo
    input.value = "";
}

