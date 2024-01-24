<template>
    <!-- input -->
    <div class="flex mt-5 items-center justify-center w-full">
        <input type="text" v-model="task" @keyup.enter="nouvelleTask" placeholder="Entrer une tâche..."
            class="px-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full" />
        <!-- <input type="text"> -->
        <button type="submit" @click="nouvelleTask"
            class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 rounded">Ajouter</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const task = ref('');
// propriété emit
const emits = defineEmits(['new-task'])

// Réinitialiser le statut après ajout
const nouvelleTask = () => {
    emits('new-task', task.value);
    task.value = '';
};
</script>
<style></style>
