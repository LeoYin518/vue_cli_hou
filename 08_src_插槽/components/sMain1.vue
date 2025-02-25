<script>
export default {
  name: "sMain1"
}
</script>

<template>
  <div>
    <slot name="prev"/>
    <ul>
      <li>java</li>
      <li>vue</li>
      <li>mysql</li>
    </ul>
    <slot name="next"/>
  </div>
</template>

<style scoped>

</style>