<script lang="ts">
	import Iri from "../../component/index.svelte";
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<Iri />
<div>
  <!-- 投稿者 -->
  <div>
   <p>ユーザ名</p>
   <textarea name="" id="jsi-name" cols="10" rows="1"></textarea>
  </div>

  <!-- メッセージを打ち込む部分 -->
  <div>
   <p>内容</p>
   <textarea name="" id="jsi-msg" cols="30" rows="4"></textarea>
  </div>
 </div>

 <!-- メッセージを送る部分 -->
 <button name="button" id="jsi-button">send message!</button>

 <!-- チャット内容が動的に生成される部分 -->
 <ul id="jsi-board" style="list-style:none;">
  <li>〜チャット内容〜</li>
 </ul>
