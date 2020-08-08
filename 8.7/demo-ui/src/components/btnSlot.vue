<template>
    <div class="btn">
        <button>
            <!-- 插槽 -->
            <slot name='header'></slot>
        </button>
        <button>
            <slot></slot>
            <slot name="wang"></slot>
        </button>
        <button>
            <slot name="footer"></slot>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>