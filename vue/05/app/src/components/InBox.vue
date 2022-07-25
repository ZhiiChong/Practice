<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
                <input type="checkbox" />
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "InBox",

    data() {
        return {
            items: [
                '111',
                '2222',
                '33333',
                'aaaaaa'
            ]
        }
    }
}
</script>
