<script setup lang="ts">
import { DEFAULT_THEME } from './themes';
import { applyTheme } from './themes/utils';

applyTheme(DEFAULT_THEME);
applyTheme("dark");
</script>

<template>
  <div class="bg-primary h-screen w-full">
    <p class="text-secondary">
      Hello, darkness :)
    </p>
  </div>
</template>

<style scoped>
</style>
