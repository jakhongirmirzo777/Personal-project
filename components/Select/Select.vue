<template>
  <fieldset class='select'>
    <div class='select__filter'>
      <input @click='showOption = !showOption' v-model='selected' class='select__input' type='text'
             placeholder='select'>
      <span class='select__icon'> <ChevronDown @click='showOption = !showOption' v-if='!selected' :class='{select__icon__active: showOption}' /> <Close v-if='selected && clerable' @click="clearOption" /> </span>
    </div>
    <div class='select__box' :class='{active: showOption}'>
      <span v-for='(option, index) in filteredOptions' :key='index'
            @click='handleOption(option.isParent, option.isAir, option.isBus, option.id, option.name)'
            class='select__option'> {{ option.name }}</span>
    </div>
  </fieldset>
</template>

<script>
import './select.scss'
import Close from '~/assets/icons/close.svg'
import ChevronDown from '~/assets/icons/chevron-down.svg'

export default {
  components: {
    Close, ChevronDown
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    clerable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showOption: false,
      selected: ''
    }
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) => option.name.toLowerCase().match(this.selected.toLowerCase()))
    }
  },
  methods: {
    hideOptionToggler() {
      this.showOption = false
    },
    handleOption(parent, air, bus, id, name) {
      this.selected = name
      const type = parent ? 'parent' : air ? 'air' : bus ? 'bus' : ''
      this.$emit('select', {
        type: type,
        id: id
      })
      this.hideOptionToggler()
    },
    clearOption(){
      this.selected = ""
      this.$emit('select', {
        type: null,
        id: null
      })
      this.hideOptionToggler()
    }
  },
  mounted() {
    document.addEventListener('click', this.hideOptionToggler.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideOptionToggler)
  }
}
</script>
