/* Custom Dragula JS */
dragula([
	document.getElementById("to-do"),
	document.getElementById("doing"),
	document.getElementById("done"),
	document.getElementById("trash")
]);
removeOnSpill: false
	.on("drag", function (el) {
		el.className.replace("ex-moved", "");
	})
	.on("drop", function (el) {
		el.className += "ex-moved";
	})
	.on("over", function (el, container) {
		container.className += "ex-over";
	})
	.on("out", function (el, container) {
		container.className.replace("ex-over", "");
	});

/* Vanilla JS to add a new task */
function addTask() {
	/* Get task text from input */
	var inputTask = document.getElementById("textbox").value;
	/* Add task to the 'To Do' column */
	document.getElementById("to-do").innerHTML +=
		"<li class='task'><p>" + inputTask + "</p></li>";
	/* Clear task text from input after adding task */
	document.getElementById("textbox").value = "";
}

/* Vanilla JS to delete tasks in 'Trash' column */
function emptyTrash() {
	/* Clear tasks from 'Trash' column */
	document.getElementById("trash").innerHTML = "";
}