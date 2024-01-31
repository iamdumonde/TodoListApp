<template>
    <!-- Tableau des tâches -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Tâche
                    </th>
                    <th scope="col" class="px-6 py-3 w-120">
                        Statut
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        Modifier
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        Supprimer
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in store.tasks" :key="index"
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        :class="{'text-green-500': task.status === 'En cours', 'text-red-500': task.status === 'Terminée'}">
                        <input v-if="editingTask === task" v-model="task.task"
                            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text">
                        <span v-else @click="startEditingTask(task)">{{ task.task }}</span>
                    </td>
                    <td class="px-6 py-4 text-center" @click="updateTaskStatus(task, $event)"
                        :class="{ 'text-green-500': task.status === 'En cours', 'text-red-500': task.status === 'Terminée' }">
                        {{ task.status }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        <PencilIcon v-if="editingTask !== task" class="w-8" @click="startEditingTask(task)" />
                        <button v-else class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="stopEditingTask(task)">Enregistrer</button>
                    </td>
                    <td class="px-6 py-4 text-center">
                        <TrashIcon class="w-8" @click="emitDeleteTask(index)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useTodoStore } from '@/stores';

// instanciation du store de Pinia
const store = useTodoStore();

// Définition des émetteurs d'évènements personnalisés
const emit = defineEmits(['delete-task', 'update-task-status', 'update-task']);

// Méthode pour mettre à jour le statut de la tâche (avec Pinia)
const updateTaskStatus = (task, event) => {
    event.preventDefault();
    
    const newStatus = task.status === "À faire" ? "En cours" : (task.status === "En cours" ? "Terminée" : "À faire");
    task.status = newStatus;

    // Émettre l'événement `update-task-status` avec le statut modifié
    store.updateTaskStatus(task);

    // Émettre l'événement personnalisé pour informer les composants parents
    emit('update-task-status', { ...task, status: task.status });
};

// Suppression de tâche
const emitDeleteTask = (taskIndex) => {
    emit('delete-task', taskIndex);
}
// Mise à jour d'une tâche
//variable pour prendre la tâche en cours d'édition
const editingTask = ref(null)
//méthode permettant de commencer l'édition
const startEditingTask = (task) => {
    editingTask.value = task;
}
//méthode pour arrêter la modification de la tâche
const stopEditingTask = (task) => {
    editingTask.value = null
    emit('update-task', task)
}

</script>
