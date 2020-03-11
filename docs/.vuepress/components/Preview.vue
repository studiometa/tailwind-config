<template>
  <div class="preview">
    <div v-show="false" ref="slot">
      <slot />
    </div>
    <div
      :style="{
        height: `${iframeHeight}px`
      }">
      <div v-if="isLoading" class="preview__loader" />
      <iframe
        v-show="!isLoading"
        ref="iframe"
        class="preview__iframe"
        width="100%"
        :height="iframeHeight"
        :srcdoc="!isFetching && html"
        frameborder="0" />
    </div>
  </div>
</template>

<script>
  import { log } from 'util';

  export default {
    name: 'Preview',
    props: {
      noResize: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isLoading: true,
        isFetching: true,
        iframeHeight: 300,
        styles: '',
        mode: '',
      };
    },
    computed: {
      head() {
        return `
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <style>
            * { box-sizing: border-box; }
            body { padding: 2px; overflow: hidden; }
            body > div {
              transform-origin: top left;
            }
            ${this.styles}
          </style>
        `;
      },
      html() {
        return `
          <!DOCTYPE html>
          <html>
            <head>
              ${this.head}
            </head>
            <body>
              ${this.$refs.slot.innerHTML}
            </body>
          </html>
        `;
      },
    },
    async mounted() {
      // Get the content before anything
      this.styles = await this.getStyles();
      this.isFetching = false;

      this.$refs.iframe.addEventListener('load', () => {
        this.isLoading = false;
        this.setIframeHeight();
        this.$refs.iframe.contentWindow.addEventListener('resize', () => {
          this.setIframeHeight();
        });
      });
    },
    methods: {
      /**
       * Get all the styles needed for the preview
       * @return {String} The CSS to be inserted in the iframe
       */
      async getStyles() {
        const styles = await import('!to-string-loader!css-loader!postcss-loader!../assets/scss/tailwind.config.css');

        return styles.default;
      },
      /**
       * Set the iframe height and its contents scale
       */
      setIframeHeight() {
        this.iframeHeight = this.$refs.iframe.contentWindow.document.documentElement.getBoundingClientRect().height;
      },
    },
  };
</script>

<style lang="css">
  .preview {
    position: relative;
    width: 100%;
    margin: 0.85rem 0;
    padding: 3rem;
    overflow: hidden;
    background: #eee;
    border-radius: 6px;
  }

  .preview,
  .preview *,
  .preview *::after,
  .preview *::before {
    box-sizing: border-box;
  }

  .preview__loader {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    transform: rotate(90deg);
  }

  .preview__loader::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #ccc;
    border-left-color: transparent;
    border-radius: 50%;
    animation: rotate 1s ease-in-out infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(720deg);
    }
  }

  .preview__iframe {
    z-index: 2;
    position: relative;
    width: 100%;
    transform-origin: top left;
  }

  .preview__iframe--load {
    opacity: 0;
  }

  .preview__nav {
    margin-top: 1em;
  }
</style>
