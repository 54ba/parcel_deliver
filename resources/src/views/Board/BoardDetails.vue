<template>
  <editor-content
      :editor="editor"
      placeholder="Add a description..."
      :class="{'p-2 -m-2 rounded-lg transition-all duration-200 border border-white': true, 'border-inherit':editable}"
  />
</template>

<script>
import {Editor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import {CharacterCount} from "@tiptap/extension-character-count";

export default {
  components: {EditorContent},
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      default: '',
    },
    maxLength: {
      type: Number,
      default: 500
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editor: null,
    }
  },
  methods: {
    setEditable() {
      this.editor.setOptions({editable: this.editable})
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        CharacterCount.configure({
          limit: this.maxLength,
        })
      ],
      editorProps: {
        attributes: {
          class: "outline-none"
        }
      },
      content: this.modelValue,
      onUpdate: () => {
        this.$emit('update:modelValue', this.editor.getJSON())
      },
      editable: this.editable
    })
    this.setEditable()
  },
  beforeUnmount() {
    this.editor.destroy()
  },
  watch: {
    modelValue(value) {
      const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
    editable() {
      this.setEditable()
    }
  }
}
</script>
