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
        async saveTasks() {
            // tâche et son statut
            const tasksWithStatus = this.tasks.map(task => ({ task: task.task, status: task.status }));
            //stockage des tâches dans le localstorage sous forme de chaîne JSON
            localStorage.setItem('tasks', JSON.stringify(tasksWithStatus));
        },
        //charger les tâches à partir du localStorage
        async loadTasks() {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks).map(({ task, status }) => ({ task, status }))
            }
        },

        async addTask(task) {
            // Fonction pour ajouter une nouvelle tâche
            // Ajoute la tâche au début du tableau
            this.tasks.unshift({ task, status: 'À faire' });
            await this.saveTasks();
        },
        //Mettre à jour une tâche
        async updateTask(task) {
            const index = this.tasks.findIndex((t) => t.task === task.task && t.status === task.status);
            this.tasks[index] = task;
            await this.saveTasks();
        },
        //Suppression de tâches
        async deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
            await this.saveTasks();
        },

        //mettre à jour le statut d'une tâche
        async updateTaskStatus(task) {
            const updatedTask = { ...task, status: task.status === "À faire" ? "En cours" : (task.status === "En cours" ? "Terminée" : "À faire") };
            const taskIndex = this.tasks.findIndex(t => t.task === task.task);
            this.tasks.splice(taskIndex, 1, updatedTask);
            await this.saveTasks();
        },
    },
});
