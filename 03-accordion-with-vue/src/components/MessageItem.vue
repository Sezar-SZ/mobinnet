<template>
    <div class="faq">
        <div
            class="question"
            :class="{ 'question-selected': isExpanded }"
            @click="$emit('messageClicked', !isExpanded ? qa.id : null)"
        >
            <span>{{ qa.question }}</span>
            <img
                :class="{ rotate: isExpanded }"
                src="../assets/down-arrow.svg"
            />
        </div>
        <div class="answer" :class="{ expand: isExpanded }">
            <span>{{ qa.answer }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "MessageItem",
    props: ["qa", "isExpanded"],
};
</script>

<style scoped>
.faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 4vh;
}

.question {
    position: relative;
    width: 100%;
    padding: 2vh 2vw;
    border: solid 1px gray;
    border-radius: 2px;
    background-color: #dfd;
    cursor: pointer;
}

.question-selected {
    background-color: #080;
    color: white;
}

img {
    width: 20px;
    position: absolute;
    left: 2vw;
    transition: 200ms;
}

.rotate {
    transform: rotate(180deg);
}

.answer {
    padding: 2vh 2vw;
    width: 100%;
    border: solid 1px gray;
    border-radius: 2px;
    background-color: #dfd;
    border-top: none;
    color: #444;
    display: none;
}

.expand {
    display: block;
}
</style>
