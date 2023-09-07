<template>
  <div class="post">
    <div class="post__header">
      <h3 class="post__text post__text_title">
        <fa class="post__back-icon" icon="chevron-left" @click="backToPosts"
        />
        {{ item.title }}
      </h3>
    </div>
    <div class="post__header">
      <div class="post__text">
        <fa class="post__icon" icon="clock" />
        {{ new Date().toLocaleString() }}
      </div>
      <div
        class="post__text">
        <fa class="post__icon" icon="eye" />
        42
      </div>
    </div>
    <div class="post__body">
      <BaseImage :img-src="'cikada-logo.jpg'" :height="460" :width="681" />
      <p class="post__info">
        {{ item.text }}
      </p>
    </div>

    <AppCommentForm class="post__comment-from"/>

    <div class="post__comments" v-if="true">
      <h3 class="post__comments-title">Комментарии</h3>
      <AppComment
        v-for="comment in 4"
        :key="comment"
      />
    </div>
    <div class="post__comments-placeholder" v-else>Комментариев нет</div>
  </div>
</template>

<script setup lang="ts">
import AppCommentForm from '@/components/posts/AppCommentForm.vue';
import AppComment from '@/components/posts/AppComment.vue';

import {
  defineProps, PropType,
} from 'vue';

import { useRouter } from '@nuxtjs/composition-api'
import BaseImage from "~/components/UI/BaseImage.vue";

interface IPropsPost {
  id: number,
  title: string,
  publish_date: string,
  tag: string,
  text: string,
}

const props = defineProps({
  item: {
    type: Object as PropType<IPropsPost>,
    required: true,
  },
  isBlogPage: {
    type: Boolean,
    required: false
  }
});

const router = useRouter();

const backToPosts = () => {
  router.push('/post');
}

</script>

<style lang="scss" scoped>

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.post__text {
  display: flex;
  align-items: center;
  gap: 15px;
}

.post__text_title {
  @include font(30px, 700, 44px);
}

.post__back-icon {
  width: 20px;
  height: 20px;
  padding: 5px;
  transition: all 0.3s ease;
}

.post__back-icon:hover {
  background-color: $bg-skyblue;
  border-radius: 50px;
  cursor: pointer;
}

.post__info {
  @include font(16px, 400, 24px);
  padding: 30px 0;
  margin: 0;
}

.post__comment-from {
  margin-top: 60px;
}

.post__comments {
  padding: 15px;
}

.post__comments-title {
  margin: 0 0 15px;
}

.post__comments-placeholder {
  @include font(16px, 400, 24px);
  text-align: center;
  padding: 15px 15px 40px;
}

.post__icon {
  width: 18px;
  height: 18px;
}
</style>
