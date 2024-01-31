<template>
    <!-- input -->
    <div class="flex mt-5 items-center justify-center w-full">
        <input type="text" v-model="task" @keyup.enter="nouvelleTask" placeholder="Entrer une tâche..."
            class="px-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full" />
        <button type="submit" @click="nouvelleTask"
            class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 rounded">Ajouter</button>
    </div>
</template>
<script setup>
// importation de la fonction 'ref' de Vue
import { ref } from 'vue';
// référence réactive  pour le modèle du champ texte (valeur par défaut : "")
const task = ref('');
// fonction 'emit' pour émettre un évènement personnalisé 'new-task'
const emit = defineEmits(['new-task'])
// fonction 'nouvelleTask' pour émettre l'évènement 'new-task' avec la valeur de 'task'
const nouvelleTask = () => {
    emit('new-task', task.value);
    // Rénitialisation de la variable 'task' à une chaîne vide après l'ajout d'une tâche
    task.value = '';
};
</script>
<style></style>