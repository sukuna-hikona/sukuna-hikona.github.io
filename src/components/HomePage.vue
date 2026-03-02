<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <p class="hero__greeting">Web Application Engineer</p>
      <h1 class="hero__title">
        フルスタック開発と<br>セキュリティの実践知
      </h1>
      <p class="hero__subtitle">
        Laravel + Vue.js を軸に13年。サーバー構築から設計・実装・運用まで一貫して対応。
        情報処理安全確保支援士の知見を活かし、セキュアなWebアプリケーションを構築します。
      </p>
      <div class="hero__badges">
        <span class="badge">Laravel / PHP</span>
        <span class="badge">Vue.js</span>
        <span class="badge">Java / SpringBoot</span>
        <span class="badge">MySQL</span>
        <span class="badge">Linux</span>
        <span class="badge">Docker</span>
        <span class="badge">情報処理安全確保支援士</span>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <p class="section__label">// About</p>
    <h2 class="section__title">自己紹介</h2>
    <div class="about__content">
      <div class="about__text">
        <p>
          Webアプリケーションエンジニアとして13年の経験を持ち、
          Laravel + Vue.js を中心としたフルスタック開発、Linuxサーバー構築・運用を専門としています。
        </p>
        <p>
          会社員時代にはサーバー入れ替えプロジェクトでの選定・資料作成の主導や、
          基幹システムを含む社内システム統括運用のプロジェクトリーダー（3名）を経験。
          フリーランス転向後は最大9名規模のチーム開発に参画し、
          クライアントとの直接交渉から技術選定・設計・実装・運用まで一貫して対応しています。
        </p>
        <p>
          セキュリティ分野では情報処理安全確保支援士の知見を活かし、
          開発工程の中でセキュアコーディングや脆弱性対策を実践しています。
        </p>
      </div>
      <div class="about__info">
        <div class="about__card">
          <p class="about__card-label">経験年数</p>
          <p class="about__card-value">13年（2026年現在）</p>
        </div>
        <div class="about__card">
          <p class="about__card-label">保有資格</p>
          <p class="about__card-value" v-for="cert in certifications" :key="cert">{{ cert }}</p>
        </div>
        <div class="about__card">
          <p class="about__card-label">得意領域</p>
          <p class="about__card-value">フルスタック開発 / サーバー構築 / セキュリティ設計</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section">
    <p class="section__label">// Skills</p>
    <h2 class="section__title">技術スタック</h2>
    <div class="skills__grid" ref="skillsGrid">
      <div class="skills__category" v-for="(category, key) in skills" :key="key">
        <h3 class="skills__category-title">{{ category.label }}</h3>
        <div class="skill__item" v-for="item in category.items" :key="item.name">
          <div class="skill__header">
            <span class="skill__name">{{ item.name }}</span>
            <span class="skill__years">{{ item.years }}</span>
          </div>
          <div class="skill__bar">
            <div
              class="skill__fill"
              :class="{ visible: skillsVisible }"
              :style="{ '--level': item.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <p class="section__label">// Projects</p>
    <h2 class="section__title">プロジェクト</h2>
    <div class="projects__grid">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="'/project/' + project.id"
        class="project-card"
      >
        <div class="project-card__header">
          <span class="project-card__number">{{ String(project.id).padStart(2, '0') }}</span>
          <span class="project-card__meta">{{ project.period }}</span>
        </div>
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__summary">{{ project.summary }}</p>
        <div class="project-card__tags">
          <span class="project-card__tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          <span v-if="project.status" class="project-card__status">{{ project.status }}</span>
        </div>
      </router-link>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__links">
        <a href="https://github.com/sukuna-hikona" target="_blank" rel="noopener">GitHub</a>
      </div>
      <p class="footer__copy">&copy; {{ new Date().getFullYear() }} Portfolio</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { projects, skills, certifications } from '../data/projects.js'

const skillsVisible = ref(false)
const skillsGrid = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )

  if (skillsGrid.value) {
    observer.observe(skillsGrid.value)
  }
})
</script>
