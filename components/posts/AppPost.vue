<template>
  <div class="post">
    <div class="post__header">
      <h3 class="post__text post__text_title">
        <font-awesome-icon
          class="post__back-icon"
          :icon="['fas', 'chevron-left']"
          @click="backToPosts"
        /> {{ item.title }}
      </h3>
    </div>
    <div class="post__header">
      <div class="post__text">
        <font-awesome-icon
          :icon="['fas', 'clock']"
        /> {{ new Date().toLocaleString() }}
      </div>
      <div
        class="post__text">
        <font-awesome-icon
          :icon="['fas', 'eye']"
        />42
      </div>
    </div>
    <div class="post__body">
      <v-picture :classNameContainer="'post__picture'" :classNameImage="'post__img'"
        :imageUrl="'cikada-logo.jpg'" />
      <p class="post__info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi tempora iusto! Aspernatur nulla itaque debitis amet ad blanditiis temporibus maxime quis molestiae molestias alias enim odit voluptates fuga, natus earum vitae quos perferendis sed obcaecati dolorem quam dignissimos harum. Distinctio expedita, autem provident dolore adipisci fugit placeat! Temporibus, commodi?
      </p>
    </div>
    <div class="post__comments" v-if="true">
      <h3 class="post__comments-title">Комментарии</h3>
      <AppComment
        v-for="comment in 4"
        :key="comment"
        :item="comment"
      />
    </div>
    <div class="post__comments-placeholder" v-else>Комментариев нет</div>
  </div>
</template>

<script setup lang="ts">
import vPicture from '@/components/pictire/v-picture.vue';
import AppComment from '@/components/posts/AppComment.vue';

import {
  defineProps, PropType,
} from 'vue';

import { useRouter } from '@nuxtjs/composition-api'

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
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_variables.scss';

.post {

}

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
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
}
.post__back-icon:hover {
  background-color: $gray-color;
  border-radius: 50px;
  cursor: pointer;
}

.post__info {
  @include font(16px, 400, 24px);
  padding: 30px 0;
  margin: 0;
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
</style>
