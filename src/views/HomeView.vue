<template>
  <img src="/worldmap.webp" alt="Ship" id="bg" />
  <main>
    <section id="firstpage">
      <n-h1> 木链天下 </n-h1>
      <n-text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们致力于搭建林产品领域海外供货商与国内用户之间的桥梁，帮助客户实现以最低成本获取最大收益。
      </n-text>
    </section>
    <section id="secondpage">
      <br />
      <n-h2>价值创造</n-h2>
      <n-p class="text"> 供应链优化以实现供货商与客户之间的最短路径及最有性价比的物流方案 </n-p>
      <n-h2>我们的客户</n-h2>
      <ul>
        <li class="text">海外林产品供货商，包括原木，锯材及其他林产品。</li>
        <li class="text">中国及越南的林产品进口商，包括锯木厂，锯材批发商及木制品工厂。</li>
      </ul>
      <n-h2>我们的优势</n-h2>
      <ul>
        <li class="text">木材的专业知识，实现原材料和产品之间的精准对接</li>
        <li class="text">20年林产品领域国际贸易及国际供应链管理经验</li>
        <li class="text">优质供货商和国内用户信息库，实现最佳匹配。</li>
      </ul>
    </section>
    <footer>
      <div><span>版权所有 © 2025 Sun-Rain</span></div>
      <div>
        <span>友情链接<br /></span>
        <span>A同行<br /></span>
        <span>B同行<br /></span>
        <span>C同行<br /></span>
      </div>
      <div>
        <RouterLink to="/contact">联系我们<i class="ri-arrow-right-line"></i></RouterLink>
      </div>
    </footer>
  </main>
</template>
<style scoped>
#bg {
  position: relative;
  top: 10vh;
  width: 100%;
  opacity: 0.8;
  filter: brightness(60%);
}
main {
  position: absolute;
  inset: 0 0 auto;
}
section {
  height: 90vh;
}
section#firstpage {
  width: 100%;
  display: grid;
  height: 100vh;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-auto-flow: column;
}
.n-h1 {
  transform: translateY(30vh);
  font-family: 'YSBTH', sans-serif;
  text-align: center;
  font-size: 128px;
  color: white;
}
.n-text {
  color: white;
  font-size: 24px;
  padding: 4vw;
}
img#transportation {
  width: 100%;
  margin-left: -10%;
}
section#secondpage {
  background: aliceblue;
}

.n-h2 {
  text-align: center;
  font-size: 36px;
}
.text {
  font-size: 20px;
  text-align: center;
}
li:not(#link > li)::marker {
  content: '';
}
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2vw;
  gap: 2vw;
  font-size: medium;
  text-align: center;
}
footer > div > :first-child {
  font-size: large;
}
a {
  color: initial;
  text-decoration: none;
}
i {
  transition: 0.3s;
}
</style>
