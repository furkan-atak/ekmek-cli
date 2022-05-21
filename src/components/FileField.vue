<template>
    <div class="FieldField__wrapper">
        <img v-bind:src="imagePreview" class="preview-image" @click="openUpload">
            <input type="file" name="image" id="file-field" @change="updatePreview" style="display: none;">
    </div>
</template>


<script>

export default {
	data() {    
        return {
            imagePreview: "https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/upload_image.png?raw=true"
        }
    },
    methods: {
        openUpload() {
            document.getElementById('file-field')?.click(); 
        },
        updatePreview(e) {
            var reader, files = e.target.files;
            if(files.length > 0) {
                reader = new FileReader();
                reader.onload = (e) => {
                    this.imagePreview = e.target.result;
                }
                reader.readAsDataURL(files[0]);
            }
        }
    }
};
</script>

<style scoped>
    
.preview-image {
    max-width: 327px;
    max-height: 184px;
    width: auto;
    height: auto;
    cursor: pointer;
}

</style>