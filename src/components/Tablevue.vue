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
                <tr v-for="task in tasks" :key="task"
                    @click.stop="task.status = task.status === 'Terminée' ? 'Terminée' : 'En cours'"
                    class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        :class="{ 'text-green-500': task.status === 'En cours', 'text-red-500': task.status === 'Terminée' }">
                        {{ task.task }}
                    </td>
                    <td class="px-6 py-4 text-center" @click.stop="updateTaskStatus(task, $event)"
                        :class="{ 'text-green-500': task.status === 'En cours', 'text-red-500': task.status === 'Terminée' }">
                        {{ task.status }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        <PencilIcon class="w-8" @click="$emit('update-task', task)" />
                    </td>
                    <td class="px-6 py-4 text-center">
                        <TrashIcon class="w-8" @click="$emit('delete-task', task)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

// Définit la propriété `tasks`
defineProps({
    tasks: {
        type: Array,
        required: true,
    },
});

// Méthode pour mettre à jour le statut de la tâche
const updateTaskStatus = (task, event) => {
    // Empêche le comportement par défaut du navigateur (clic sur une cellule de tableau) 
    event.preventDefault()
    // Met à jour le statut de la tâche 
    task.status = task.status === "À faire" ? "En cours" : "Terminée"
    // Émettre l'événement `update-task-status` avec le statut modifié 
    emit('update-task-status', { ...task, status: task.status })
}

</script>
