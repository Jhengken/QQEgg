<script>
import { ref } from 'vue'
export default {
  setup(){
    const imgIdx = ref(0);
    const slidList = ref([
        { id: '1', src: "https://source.unsplash.com/600x400?1" },
        { id: '2', src: "https://source.unsplash.com/600x400?2" },
        { id: '3', src: "https://source.unsplash.com/600x400?3" },
        { id: '4', src: "https://source.unsplash.com/600x400?4" },
        { id: '5', src: "https://source.unsplash.com/600x400?5" },
        { id: '6', src: "https://source.unsplash.com/600x400?6" },
        { id: '7', src: "https://source.unsplash.com/600x400?7" },
        { id: '8', src: "https://source.unsplash.com/600x400?8" },
    ]);
    
    const handleMenuActive = idx => {
      imgIdx.value = idx;
    };
    
    return {
      imgIdx,
      slidList,
      handleMenuActive,
    }
  }
};
</script>