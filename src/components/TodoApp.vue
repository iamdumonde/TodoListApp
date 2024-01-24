<template>
    <div class="container flex flex-col justify-center items-center max-w-2xl mx-auto">
        <!-- en tête -->
        <h2 class="text-center my-2 text-black decoration-double">TodoList App</h2>
        <!-- inputVue -->
        <InputVue @new-task="addTask" />
        <!-- Table -->
        <Tablevue :tasks="tasks" @update-task="updateTask" @delete-task="deleteTask" @edit-task="editTask" @update-task-status="updateTaskStatus" />
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
    tasks.value.push({ "task": task, status: 'À faire', completed: false });
};

// Met à jour une tâche dans la liste
// const updateTask = (task) => {
//   tasks.value = tasks.value.map((t) => (t.id === task.id ? task : t));
//   completed.value = completed.value.map((c, i) => c || tasks.value[i].status === 'Terminée');
// }
// Supprime une tâche de la liste
// const deleteTask = (task) => {
//     tasks.value = tasks.value.filter((t) => t.id !== task.id);
// };

</script>
<style scoped>
h2 {
    font-size: 5em;
}
</style>

    

    


  