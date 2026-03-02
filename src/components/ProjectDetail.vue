<template>
  <div class="detail" v-if="project">
    <router-link to="/#projects" class="detail__back">
      ← プロジェクト一覧
    </router-link>

    <h1 class="detail__title">{{ project.title }}</h1>

    <div class="detail__meta">
      <span>{{ project.period }}</span>
      <span>{{ project.role }}</span>
    </div>

    <div class="detail__tags">
      <span class="project-card__tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      <span v-if="project.status" class="project-card__status">{{ project.status }}</span>
    </div>

    <div class="detail__section">
      <h2 class="detail__section-title">概要</h2>
      <p class="detail__text">{{ project.summary }}</p>
    </div>

    <div class="detail__section" v-if="project.detail.solution">
      <h2 class="detail__section-title">ソリューション</h2>
      <p class="detail__text">{{ project.detail.solution }}</p>
    </div>

    <div class="detail__section" v-if="project.detail.challenges">
      <h2 class="detail__section-title">解決する課題</h2>
      <ul class="detail__list">
        <li v-for="item in project.detail.challenges" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="detail__section" v-if="project.detail.techStack">
      <h2 class="detail__section-title">技術スタック</h2>
      <table class="detail__table">
        <tr v-for="(value, key) in project.detail.techStack" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>

    <div class="detail__section" v-if="project.detail.scale">
      <h2 class="detail__section-title">規模</h2>
      <table class="detail__table">
        <tr v-for="(value, key) in project.detail.scale" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>

    <div class="detail__section" v-if="project.detail.features">
      <h2 class="detail__section-title">主な機能</h2>
      <ul class="detail__list">
        <li v-for="item in project.detail.features" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="detail__section" v-if="project.detail.scope">
      <h2 class="detail__section-title">担当工程</h2>
      <p class="detail__text">{{ project.detail.scope }}</p>
    </div>

    <div class="detail__section" v-if="project.detail.highlights">
      <h2 class="detail__section-title">工夫した点・できるようになったこと</h2>
      <ul class="detail__list">
        <li v-for="item in project.detail.highlights" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="detail__section" v-if="project.detail.improvements">
      <h2 class="detail__section-title">改善効果</h2>
      <table class="detail__table">
        <tr v-for="(value, key) in project.detail.improvements" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>

    <div class="detail__nav">
      <router-link v-if="prevProject" :to="'/project/' + prevProject.id" class="detail__back">
        ← {{ prevProject.title }}
      </router-link>
      <span v-else></span>
      <router-link v-if="nextProject" :to="'/project/' + nextProject.id" class="detail__back" style="text-align: right;">
        {{ nextProject.title }} →
      </router-link>
    </div>
  </div>

  <div class="detail" v-else>
    <router-link to="/" class="detail__back">← ホームに戻る</router-link>
    <p class="detail__text">プロジェクトが見つかりません。</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const project = computed(() => {
  return projects.find(p => p.id === parseInt(props.id))
})

const prevProject = computed(() => {
  const idx = projects.findIndex(p => p.id === parseInt(props.id))
  return idx > 0 ? projects[idx - 1] : null
})

const nextProject = computed(() => {
  const idx = projects.findIndex(p => p.id === parseInt(props.id))
  return idx < projects.length - 1 ? projects[idx + 1] : null
})
</script>

<style scoped>
.detail__nav {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  gap: 1rem;
}
</style>
