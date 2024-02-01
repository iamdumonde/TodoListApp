<template>
    <div class="container flex flex-col justify-center items-center max-w-2xl mx-auto">
        <!-- en tête -->
        <h2 class="text-center my-2 text-black decoration-double">TodoList App</h2>
        <!-- inputVue -->
        <InputVue @new-task="addTask" />
        <!-- Table -->
        <Tablevue :tasks="store.tasks" @delete-task="deleteTask" @update-task-status="updateTaskStatus"
            @update-task="updateTask" />
    </div>
</template>
<script setup>
// import des composants
import InputVue from './InputVue.vue';
import Tablevue from './Tablevue.vue';
import { onMounted } from 'vue';
import { useTodoStore } from '@/stores';

// création d'une instance du magasin store de Pinia
const store = useTodoStore();

// se charge lorsque le composant est monté...
onMounted(() => {
    // chargement des tâches
    store.loadTasks();
})


// Ajoute une tâche à la liste
const addTask = (task) => {
    store.addTask(task);
};
// Modification d'une tâche
const updateTask = (task) => {
    store.updateTask(task);
}
// Suppression d'une tâche
const deleteTask = (taskIndex) => {
    store.deleteTask(taskIndex);
}
// actualisation du statut d'une tâche
const updateTaskStatus = (task) => {
    store.updateTaskStatus(task);
};
</script>
<style scoped>
h2 {
    font-size: 5em;
}
</style>