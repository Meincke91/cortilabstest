<template>
		<div class="my-header row header_container box-shadowed">
			<logo-element></logo-element>
			<header-element myvalue="1" mylabel="Device Deployed"></header-element>
      <header-element myvalue="73" mylabel="Days since start"></header-element>
      <header-element myvalue="2218" mylabel="Calls since start"></header-element>
      <header-element myvalue="141" mylabel="CA calls detected since start"></header-element>
      <header-element myvalue="84 sec" mylabel="Avg. time to detection"></header-element>
		</div>	
</template>

<script>
import LogoElement from '@/components/LogoElement'
import HeaderElement from '@/components/HeaderElement'
export default {
  name: 'my-header',
  components: {
    LogoElement,
    HeaderElement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_container{
	height:60px;
	background-color: #ffffff;
	width: 95%;
	float:none;
	margin:auto;
	margin-top:30px;
	border-radius: 3px;
}
</style>