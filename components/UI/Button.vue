<template>
  <div>
    <button :class="style"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      if (this.primary) {
        return "primary";
      } else if (this.secondary) {
        return "secondary";
      } else {
        return "light";
      }
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 0;
  padding: 10px;
  cursor: pointer;
  width: 100px;
}

.primary {
  background: var(--accent);
  color: var(--light_gray);
  border: none;
  font-weight: bold;
}

.secondary {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.light {
  color: var(--dark-gray);
  background: transparent;
}
</style>