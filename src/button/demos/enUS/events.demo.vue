<markdown>
# Events

Handle events of buttons.
</markdown>

<template>
  <n-button @click="handleClick">
    Click Me
  </n-button>
</template>
<script setup lang="ts">
import { useMessage } from 'ithinkdt-ui'

const message = useMessage()
const handleClick = () => {
  message.info('Button Clicked')
}
</script>
