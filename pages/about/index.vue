<template>
  <div class='w-100 mt-5 d-flex justify-center'>
    <p> Value {{ selected }} </p>
    <div style='width: 20rem; height: 4rem'>
      <Select :options='options' @select='optionSelect' clerable />
    </div>
  </div>

</template>

<script>

import Select from '~/components/Select/Select'

export default {
  layout: 'empty',
  components: { Select },
  data() {
    return {
      selected: '',
      options: [
        {
          isParent: true,
          isChild: false,
          isAir: false,
          isBus: false,
          name: 'Country1 Air1',
          id: "1"
        },
        {
          isParent: false,
          isChild: true,
          isAir: true,
          isBus: false,
          name: 'Air1',
          id: '2'
        },
        {
          isParent: false,
          isChild: true,
          isAir: true,
          isBus: false,
          name: 'Air2',
          id: '3'
        },
        {
          isParent: false,
          isChild: true,
          isAir: false,
          isBus: true,
          name: 'Bus1 country1',
          id: '4'
        },
        {
          isParent: false,
          isChild: true,
          isAir: false,
          isBus: true,
          name: 'Bus2',
          id: '5'
        },
      ]
    }
  },
  methods: {
    optionSelect({id, type}) {
      this.selected = id
    }
  }
}
</script>
