<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
            this.projects = resp.data.results;
        });
    }
};
</script>

<template>

    <h1>Projects</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Latest_fix</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects">
                <th scope="row">{{ project.id }}</th>
                <td>{{ project.title }}</td>
                <td>{{ project.latest_fix }}</td>
            </tr>
        </tbody>
    </table>

</template>



<style lang="scss" scoped></style>