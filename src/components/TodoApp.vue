<template>
    <div class="container flex flex-col justify-center items-center max-w-2xl mx-auto">
        <!-- en tête -->
        <h2 class="text-center my-2 text-black decoration-double">TodoList App</h2>
        <!-- inputVue -->
        <InputVue @new-task="addTask" />
        <!-- Table -->
        <Tablevue :tasks="tasks" @delete-task="deleteTask"
        @update-task-status="updateTaskStatus"
        @update-task="updateTask"/>
    </div>
</template>
<script setup>
// import des composants
import InputVue from './InputVue.vue';
import Tablevue from './Tablevue.vue';
import { ref } from 'vue';

// Définit les variables et méthodes
// Liste des tâches
const tasks = ref([]);

// Ajoute une tâche à la liste
const addTask = (task) => {
    tasks.value.push({ "task": task, status: 'À faire' });
};

// Modification d'une tâche
const updateTask = (task) => {
    const index = tasks.value.findIndex(t => t.task === task.task && t.status === task.status);
    tasks.value[index] = task;
}
// Suppression d'une tâche
const deleteTask = (taskIndex) => {
    tasks.value.splice(taskIndex, 1);
}

</script>
<style scoped>
h2 {
    font-size: 5em;
}
</style>