<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default() {
      return [];
      /* return [
        { id: '00', name: 'Some Name', value: 'Some Value' },
        { id: '01', name: 'Other Name', value: 'Other Value' },
      ]; */
    },
  },
  booleanProp: Boolean,
})

function log (...args) { console.log(...args); }

const log2 = (...args) => console.log(...args);
</script>

<template>
  <div class="greetings">

    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>

    <!-- v-if on template -->
    <template v-if="items.length">
      <div :class="log('items.length', items.length)">
        Items length is {{ items.length }}
      </div>
    </template>
    <template v-if="items.length">
      <div :class="log('items.length', items.length)">
        Items length is truthy
      </div>
    </template>
    <template v-if="booleanProp">
      <div :class="{ 'prop-true': booleanProp }">DIV Boolean prop is true</div>
    </template>
    <template v-if="booleanProp">
      Boolean prop is {{ booleanProp }}
      <div :class="{ 'prop-true': booleanProp }">DIV Boolean prop is true</div>
    </template>

    <!-- v-if on div element -->
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      Boolean prop is true
    </div>
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      Boolean prop is {{ booleanProp }}
    </div>
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      <div>DIV Boolean prop is true</div>
    </div>
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      <div>
        DIV Boolean prop is {{ booleanProp }}
      </div>
    </div>
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      <!--div-->
        DIV Boolean prop is {{ booleanProp }}
      <!--/div-->
    </div>
    <div v-if="booleanProp" :class="log('boolean prop', booleanProp)">
      Boolean prop is {{ booleanProp }}
      <div :class="{ 'prop-true': booleanProp }">DIV Boolean prop is true</div>
    </div>

    <!-- v-for -->
    <template v-for="item in items" :key="'template1-'+item.id" :class="log('item', item)">
      Item ID #{{item.id}}
    </template>
    <template v-for="item in items" :key="'template2-'+item.id" :class="log('item', item)">
      <div :class="log2('item', item)">
        Item ID #{{item.id}}
      </div>
    </template>
    <div v-for="item in items" :key="'div1-'+item.id" :class="log('item', item)">
      Item ID #{{item.id}}
    </div>
    <div v-for="item in items" :key="'div2-'+item.id" :class="log('item', item)">
      <h4>
        Item ID #{{item.id}}
      </h4>
      <div>
        <strong>
          {{item.name}}
        </strong>
        : {{item.value}}
      </div>
    </div>

    <!-- v-if with v-for -->
    <template v-if="items.length">
      <div v-for="item of items">
        Item ID #{{ item.id }}
      </div>
    </template>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
