<template>
  <div>
    <div class="search-box" style="display: block; margin-bottom: 2em;">
      <input
        ref="search"
        v-model="search"
        type="search"
        style="width: 100%;"
        placeholder="Search by key: theme.colors.black"
        @input="filter">
    </div>
    <div v-if="formatted" class="tailwind-config language-json">
      <pre class="language-json"><code class="language-json" v-html="formatted" /></pre>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs';
  import { flatten, unflatten } from 'flat';
  import fuzzysort from 'fuzzysort';

  export default {
    props: {
      config: {
        type: Object,
        default: () => TAILWIND_CONFIG,
      },
    },
    data() {
      return {
        search: '',
        formatted: '',
      };
    },
    mounted() {
      // Flattened data does not need to be reactive
      this.flattened = this.flatten(this.config);
      this.flattenedKeys = Object.keys(this.flattened);

      this.$nextTick(() => {
        this.$refs.search.focus();
        this.filter();
      });
    },
    methods: {
      /**
       * Debounce filter method.
       *
       * @return {void}
       */
      filter() {
        clearTimeout(this.filterTimer);
        this.filterTimer = setTimeout(() => {
          const filteredKeys = fuzzysort.go(this.search, this.flattenedKeys).map(({ target }) => target);
          const filtered = filteredKeys.reduce((acc, key) => {
            acc[key] = this.flattened[key];
            return acc;
          }, {});

          const code = filteredKeys.length ? filtered : this.flattened;
          this.setFormatted(this.unflatten(code));
        }, 300);
      },
      /**
       * Format the code to display and set it to the `formatted` data.
       *
       * @param {Object} code The code object.
       */
      setFormatted(code) {
        const content = JSON.stringify(code, null, 2);
        this.formatted = Prism.highlight(content, Prism.languages.js, 'js');
      },
      /**
       * Recursively transform deep nested object into array if all their keys are numbers.
       *
       * @param  {mixed} value The value to transform
       * @return {mixed}       The transformed value
       */
      transformToArray(value) {
        const type = Object.prototype.toString.call(value);
        const isObject = type === '[object Object]';

        if (!isObject) {
          return value;
        }

        const textKeys = Object.keys(value).filter((key) => Number.isNaN(Number(key)));
        const shouldBeArray = textKeys.length <= 0;

        if (shouldBeArray) {
          return Object.values(value);
        }

        return Object.entries(value).reduce((acc, [ key, val ]) => {
          acc[key] = this.transformToArray(val);
          return acc;
        }, {});
      },
      /**
       * Flatten an object.
       *
       * @param  {Object} obj The object to flatten.
       * @return {Object}     A flattened object.
       */
      flatten(obj) {
        return flatten(obj, {
          object: true,
        });
      },
      /**
       * Unflatten an object.
       *
       * @param  {Object} obj The object to unflatten.
       * @return {Object}     An unflattened object.
       */
      unflatten(obj) {
        return this.transformToArray(
          unflatten(obj, {
            object: true,
          }),
        );
      },
    },
  };
</script>

<style>
  .tailwind-config {
    width: 90vw;
    left: 50%;
    margin-left: -45vw;
  }
</style>
