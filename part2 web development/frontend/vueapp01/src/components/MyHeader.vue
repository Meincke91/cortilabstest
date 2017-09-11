<template>
		<div class=" my-headerrow header_container box-shadowed">
			<logo-element></logo-element>
			<header-element element-value="1" element-label="Device Deployed"></header-element>
      <header-element element-value="73" element-label="Days since start"></header-element>
      <header-element element-value="2218" element-label="Calls since start"></header-element>
      <header-element element-value="141" element-label="CA calls detected since start"></header-element>
      <header-element element-value="84 sec" element-label="Avg. time to detection"></header-element>
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