<template>
    <div id="app">
        <div id="faqs-container" dir="rtl">
            <MessageItem
                v-for="qa in data"
                :qa="qa"
                :key="qa.id"
                :is-expanded="expandedID === qa.id"
                @messageClicked="expandedID = $event"
            ></MessageItem>
        </div>
    </div>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";
import QA from "./assets/data.json";

export default {
    name: "App",
    components: {
        MessageItem,
    },
    data: function () {
        return {
            data: null,
            expandedID: null,
        };
    },
    mounted: function () {
        this.data = QA;
    },
};
</script>

<style>
@font-face {
    font-family: "iransans";
    src: url("./assets/iransansweb.woff");
}

* {
    font-family: "iransans";
}

body {
    background-color: #cec;
}

#faqs-container {
    margin: 0 auto;
    margin-top: 20vh;
    padding: 2vh 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
