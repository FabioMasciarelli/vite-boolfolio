<script>

import axios from 'axios';

export default {
    data() {
        return {
            project: null
        }
    },
    created() {

        const slug = this.$route.params.slug;

        axios.get(`http://127.0.0.1:8000/api/project/${slug}`).then((resp) => {
            this.project = resp.data.results;
            console.log(this.project);
        })
    }

}
</script>

<template>
    <dl>
        <dt>Title</dt>
        <dd>{{ this.project.title }}</dd>

        <dt>Latest Fix</dt>
        <dd>{{ this.project.latest_fix }}</dd>

        <dt>Technologies</dt>
        <dd v-for="technology in this.project.technologies">{{ technology.name }}</dd>

        <dt>Type</dt>
        <dd>{{ this.project.type.name }}</dd>

        <dt>README</dt>
        <dd>{{ this.project.readme }}</dd>
    </dl>
</template>


<style lang="scss" scoped></style>