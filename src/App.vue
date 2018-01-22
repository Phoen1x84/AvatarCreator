<template>
    <div class="canvas">
        <Float />
        <!-- <avatar-canvas /> -->
        <TeaserTitle />
        <Email />
    </div>
</template>

<script>
import 'normalize.css';
import './components/core/main.scss';
import bus from './eventbus.js';
import Float from './components/floats/index.vue';
import TeaserTitle from './components/teaser-title/index.vue';
import Email from './components/email-form/index.vue';

// avatar creator
import AvatarCanvas from './components/avatar/avatar-canvas.vue';

export default {
    name: 'app',
    components: {
        AvatarCanvas,
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