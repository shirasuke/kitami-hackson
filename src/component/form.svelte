<script lang="ts">
  import { createForm } from 'felte';
	import { sendMessage } from '../api/sendMessage';
  let successMessage: string = "";

  const { form } = createForm({
    onSubmit: async (values) => {
      const res = await sendMessage(values.username,values.message)
      console.log(res.Message)
      if(res.Message === "POST OK"){
        successMessage = "送信に成功しました"
      }
    },
  });
  const handleClick = () => {
    successMessage = "";
  };
</script>


<form use:form>
  <div>
    <p>ユーザ名</p>
    <input type="text" name="username">
  </div>
  <label>テキスト入力</label>
  <div class="textarea-div">
    <textarea
      class="textarea"
      placeholder="任意"
      name="message"
      cols="30"
      rows="4"
      value={""}
    />
  </div>

 <!-- メッセージを送る部分 -->
  <button type="submit" on:click={()=>handleClick()} name="button" id="jsi-button">投稿する</button>
  <span class="success">{successMessage ?? ""}</span>
</form>
<style>

</style>
