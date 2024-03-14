<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToProjectDetails(projectId) {
      this.$router.push({ name: 'ProjectInfo', params: { id: projectId } });
    }
  }
};
</script>
