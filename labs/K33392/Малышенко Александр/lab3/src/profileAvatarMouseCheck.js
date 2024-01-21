import { ref, onMounted, onUnmounted } from 'vue'

export function mouseOnAvatar() {
    const onAvatar = ref(false)

    function update(event) {
        const xPos = event.pageX
        const yPos = event.pageY

        if (mouseInCircle(xPos, yPos)){
            onAvatar.value = true
            return 0
        }

        onAvatar.value = false
    }

    function mouseInCircle(x, y){
        const xMidAv = 295
        const yMidAv = 188
        const maxDist = 70
        return (Math.sqrt(Math.pow((xMidAv - x), 2) + Math.pow((yMidAv - y), 2))) < maxDist
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return { onAvatar }
}