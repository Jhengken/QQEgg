<script setup>
const props = defineProps({
    labelString: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="container mb-2">
        <div class="row">
            <div class="col">
                <h2>
                    <i class="material-icons-round me-2" style="transform: scale(1.3)">face_5</i>
                    {{ props.labelString }}
                </h2>
            </div>
        </div>
    </div>
</template>

<style></style>