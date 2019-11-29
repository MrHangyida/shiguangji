<template>
 <div id="app">
   <router-view />
 </div>
</template>

<style>
*{
		margin:0;
		padding: 0;
		list-style: none;
		font-weight: normal;
		text-decoration: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
