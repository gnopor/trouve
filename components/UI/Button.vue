<template>
  <div>
    <button v-bind="$attrs" :class="style" v-on="listeners">
      <span class="button-text">
        <client-only v-if="icon"> <mdicon :name="icon" /> &nbsp; </client-only>

        <slot></slot>
      </span>
    </button>
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
    icon: {
      type: String,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
        // blur: (event) => this.blurButton(event),
        // mouseover: (event) => this.mouseoverx(event),
        // mouseout: (event) => this.mouseoutx(event),
      };
    },
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
  methods: {
    clickButton(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 0;
  padding: 10px;
  cursor: pointer;
  width: 108px;
}

button span {
  display: flex;
  justify-content: center;
  align-items: center;
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