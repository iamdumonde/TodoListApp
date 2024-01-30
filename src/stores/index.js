import { createPinia } from 'pinia';

export const pinia = createPinia();
// Importer les fonctions nécessaires de Pinia
import { defineStore } from 'pinia';
// Définir le store `todoStore`
export const useTodoStore = defineStore('todoStore', {
    // Définir l'état initial du store
    state: () => ({
        tasks: [], // Tableau pour stocker les tâches
    }),
    // Définir les actions du store
    actions: {
        //sauvegarde des tâches avec du local storage
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        //charger les tâches à partir du localStorage
        loadTasks() {
            const savedTasks = JSON.parse(localStorage.getItem('tasks'));
            if (savedTasks) {
                this.tasks = savedTasks;
            }
        },

        addTask(task) {
            // Fonction pour ajouter une nouvelle tâche
            // Ajoute la tâche au début du tableau
            this.tasks.unshift({ task, status: 'À faire' });
            this.saveTasks();
        },
        //Mettre à jour une tâche
        updateTask(task) {
            const index = this.tasks.findIndex((t) => t.task === task.task && t.status === task.status);
            this.tasks[index] = task;
            this.saveTasks();
        },
        //Suppression de tâches
        deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
            this.saveTasks();
        },
    },
});
