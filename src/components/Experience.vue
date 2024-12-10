<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">{{ $t('experience.title') }}</h1>
    <div class="timeline">
      <div class="timeline-item" v-for="(exp, index) in experiences" :key="exp.id">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>{{ exp.role }}</h4>
          <h5 class="text-muted">{{ exp.company }} | {{ exp.date }}</h5>
          <p>{{ exp.description }}</p>
          <ul>
            <li v-for="(task, taskIndex) in exp.tasks" :key="taskIndex">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const experiences = [
  {
    id: 1,
    role: t('experience.items.1.role'),
    company: t('experience.items.1.company'),
    date: t('experience.items.1.date'),
    description: t('experience.items.1.description'),
    tasks: [
      t('experience.items.1.tasks.0'),
      t('experience.items.1.tasks.1'),
      t('experience.items.1.tasks.2'),
    ]
  },
  {
    id: 2,
    role: t('experience.items.2.role'),
    company: t('experience.items.2.company'),
    date: t('experience.items.2.date'),
    description: t('experience.items.2.description'),
    tasks: [
      t('experience.items.2.tasks.0'),
      t('experience.items.2.tasks.1'),
      t('experience.items.2.tasks.2'),
    ]
  },
  {
    id: 3,
    role: t('experience.items.3.role'),
    company: t('experience.items.3.company'),
    date: t('experience.items.3.date'),
    description: t('experience.items.3.description'),
    tasks: [
      t('experience.items.3.tasks.0'),
      t('experience.items.3.tasks.1'),
      t('experience.items.3.tasks.2'),
    ]
  },
];
</script>

<style scoped>
.timeline {
  position: relative;
  margin: 2rem 0;
  padding: 0;
  list-style: none;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border-radius: 50%;
  transform: translateX(-50%);
}

.timeline-content {
  margin-left: 40px;
  padding: 1rem;
  border-left: 3px solid #007bff;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
}

.timeline-content h4 {
  margin-bottom: 0.5rem;
}

.timeline-content h5 {
  margin-bottom: 0.5rem;
  font-weight: normal;
  font-size: 0.9rem;
}

.timeline-content p {
  margin-bottom: 0.5rem;
}
</style>
