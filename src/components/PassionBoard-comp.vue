<template>
    <div class="col-3 m-2 p-2 playlist">
        <img :src="song.img" :alt="song.name" style="width: 100%;">
    </div>
</template>

<script>
export default {
    props: ["song"]
}
</script>

<style>
    .playlist {
        border: 2px solid #492F10;
        border-radius: 5px;
        background-color: #DF5E5E;
    }
</style>