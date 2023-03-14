<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'modal title',
    },
    body: {
        type: String,
        default: 'modal body',
    },
})

const modalText = ref('');

const emit = defineEmits(['modifyText']);

const save = () => {
    emit('modifyText', modalText.value)
    modalText.value = '';
}
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <h3>{{ props.title }}</h3>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>{{ props.body }}</h5>
                    <input type="text" class="form-control btn-light" placeholder="請輸入內容" v-model="modalText">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="save">儲存變更</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    font-size: large;
}

input {
    width: auto;
    text-align: center;
    border: 1px solid gray;
}
</style>