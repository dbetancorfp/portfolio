<template>
    <li class="list-group-item">
      <h5>{{ experience.title }}</h5>
      <p><strong>Duration:</strong> {{ experience.duration }}</p>
      <p>{{ experience.description }}</p>
      <p><strong>Email:</strong> {{ experience.email }}</p>
    </li>
</template>

<script lang="ts" setup>
import type { Experience } from "@/components/ExperienceComp/Experience";

defineProps({
experience: {
    type: Object as () => Experience,
    required: true
}
});
</script>
  