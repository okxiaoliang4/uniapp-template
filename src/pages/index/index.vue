<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggle = useToggle(locale, {
  truthyValue: 'zh-CN',
  falsyValue: 'en',
})
</script>

<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view class="flex items-center">
      lang: {{ $i18n.locale }}
      <button
        class="ml-20rpx"
        @click="toggle()"
      >
        toggle
      </button>
    </view>
    <view class="mt-20rpx text-area">
      <text class="title text-red! text-64rpx!">
        {{ t('hello') }}
      </text>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
