function addTask(category) {
  const input = document.getElementById(`${category}-input`);
  const list = document.getElementById(`${category}-list`);

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = "";
  }
}
