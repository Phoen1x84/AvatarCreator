<template>
    <div class="canvas">
        <Float />
        <TeaserTitle />
        <Email />
    </div>
</template>

<script>
import 'normalize.css';
import './components/core/main.scss';
import Float from './components/floats/index.vue';
import TeaserTitle from './components/teaser-title/index.vue';
import Email from './components/email-form/index.vue';
export default {
    name: 'app',
    components: {
        Float,
        TeaserTitle,
        Email
    } 
}

const circles = () => {
    console.log('test');
};

</script>

<style lang="scss">
.canvas {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
}
</style> 