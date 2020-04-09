<template>
  <div>
    <h2>Upload - 資料上傳</h2>
    <div style="margin-top: 10%">
      <div style="margin-bottom: 5%">
        <p>上傳檔案</p>
        <kendo-upload
          ref="upload"
          name="files"
          :async-save-url="'custom-save-url'"
          :async-remove-url="'custom-remove-url'"
          :files="files"
        >
        </kendo-upload>
      </div>
      <div style="margin-bottom: 5%">
        <p>上傳PDF</p>
        <kendo-upload
          ref="imageUpload"
          name="pdfFiles"
          :async-save-url="'custom-save-url'"
          :async-remove-url="'custom-remove-url'"
          :validation-allowed-extensions="['.pdf']"
        >
        </kendo-upload>
      </div>
      <div style="margin-bottom: 5%">
        <p>
          上傳Image（<strong>GIF</strong>, <strong>JPG</strong>,
          <strong>PNG</strong>）
        </p>
        <kendo-upload
          ref="imageUpload"
          name="imageFiles"
          :async-save-url="'custom-save-url'"
          :async-remove-url="'custom-remove-url'"
          :validation-allowed-extensions="['.gif', '.jpg', '.png']"
        >
        </kendo-upload>
      </div>
      <div style="margin-bottom: 5%">
        <p>上傳限制檔案大小（<strong>4MB</strong>）</p>
        <kendo-upload
          ref="documentsUpload"
          name="documentFiles"
          :async-save-url="'custom-save-url'"
          :async-remove-url="'custom-remove-url'"
          :validation-max-file-size="4194304"
        >
        </kendo-upload>
      </div>
      <div style="margin-bottom: 5%">
        <p>上傳目錄</p>
        <kendo-upload
          ref="upload"
          name="files"
          :async-save-url="'custom-save-url'"
          :async-remove-url="'custom-remove-url'"
          :async-chunk-size="11000"
          :directory="true"
          :directory-drop="true"
        >
        </kendo-upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
};
</script>
