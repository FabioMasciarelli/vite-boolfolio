<script>
import axios from 'axios';

export default {
    data() {
        return {
            numberPage: null,
            curPage: null,
            projects: []
        }
    },
    created() {
        this.curPage = 1;
        this.callProjects();
    },
    methods: {
        callProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.curPage,
                },
            })
                .then(response => {
                    this.projects = response.data.results.data;
                    this.numberPage = response.data.results.last_page;
                });
        },
        changePage(value) {
            this.curPage = value;
            this.callProjects();
        }
    }
}
</script>

<template>

    <h1>Projects</h1>

    <nav aria-label="Page navigation" class="py-5">
        <ul class="pagination d-flex justify-content-center">
            <li v-for="page in numberPage" class="page-item">
                <a @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
            </li>
        </ul>
    </nav>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Latest Fix</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects">
                <th scope="row">{{ project.id }}</th>
                <td><router-link :to="{ name: 'project-show', params: { slug: project.slug }}">{{ project.title }}</router-link></td>
                <td>{{ project.latest_fix }}</td>
            </tr>
        </tbody>
    </table>


</template>



<style lang="scss" scoped></style>