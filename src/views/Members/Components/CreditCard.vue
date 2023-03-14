<script setup>
import { useMemberDataStore } from '../../../stores/memberData.js'

const memberDataStore = useMemberDataStore();

const props = defineProps({
    creditNumInCard: {
        type: String,
        default: '',
    },
    have: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
    <div class="row mb-4">
        <div class="d-flex col-6 border-bottom">
            <div class="mb-5" :class="have ? 'haveCard' : 'emptyCard'">
                <button v-if="have" class="btn btn-danger p-2"
                    @click="memberDataStore.removeCreditCard(creditNumInCard)">刪除</button>
                <h6>{{ have ? `${creditNumInCard.slice(0, 4)}-****-****-****` : '尚未新增信用卡' }}</h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.emptyCard {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #DCDCDC;
    width: 300px;
    height: 200px;
}

.emptyCard>h6 {
    color: white;
}

.haveCard {
    position: relative;
    background: linear-gradient(145deg, #6495ED, #E0FFFF);
    border-radius: 30px;
    width: 300px;
    height: 200px;
}

.haveCard>h6 {
    position: absolute;
    right: 20px;
    bottom: 15px;
    color: #4682B4;
}

.haveCard>button {
    position: absolute;
    right: 20px;
    top: 15px;
}
</style>