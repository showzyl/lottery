<template>
  <div class="ssq">
    <ul class="red">
      <li v-for="(items, i) in red">
        <span v-for="(item, k) in items" @click="toggleBall('red', i, k)" :class="{'on': item.chosen}">{{k}}</span>
      </li>
    </ul>

    <mt-button type="primary" @click.native="choseAllRed">全选红球</mt-button>
    <mt-button type="primary" @click.native="">清空红球</mt-button>

    <ul class="blue">
      <li v-for="(items, i) in blue">
        <span v-for="(item, k) in items" @click="toggleBall('blue', i, k)" :class="{'on': item.chosen}">{{k}}</span>
      </li>
    </ul>

    <mt-button type="primary" @click.native="choseAllBlue">全选蓝球</mt-button>
    <mt-button type="primary" @click.native="">清空蓝球</mt-button>


    <mt-button type="primary" @click.native="">加倍</mt-button>

    <p>
      <span class="">共 {{stake}} 注</span>
      <span class="">共 {{stake}} 钱</span>
    </p>
  </div>
</template>

<script>
	import Vue from 'vue'
	import {Button} from 'mint-ui'
	Vue.component(Button.name, Button)

	export default {
		name: 'ssq',
		data () {
			return {
				blue: [],
				red: [],
				stake: 0,
				total: 0
			}
		},
		created(){
			this.createBall()
		},
		methods: {
			createBall: function () {

//					red: [{
//						'1': {
//							num: 1,
//							chosen: false
//            }
//					}]

				const me = this

				let red = []
				for (let i = 0; i < 33; i++) {
					let k = {}
					let o = {}
					let num = (i + 1) + ''
					o.num = num
					o.chosen = false
					k[num] = o
					// me['ball']['red']
					red.push(k)
				}
				me['red'] = red

				console.log(red)
				let blue = []
				for (let i = 0; i < 15; i++) {
					let k = {}
					let o = {}
					let num = (i + 1) + ''
					o.num = num
					o.chosen = false
					k[num] = o
					// me['ball']['red']
					blue.push(k)
				}
				me['blue'] = blue
			},
			choseAllRed(){

			},
			choseAllBlue(){

			},
			toggleBall(type, i, k){
				const me = this
				console.log('type: ', type)
				console.log('i: ', i)
				console.log('k: ', k)

				let bChosen = !me[type][i][k]['chosen']
				Vue.set(me[type][i][k], 'chosen', bChosen)
			}
		}
	}
</script>

<style scoped>

  ul li {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    float: left;
    text-align: center;
  }

  ul li span {
    border-radius: 50%;
    border: 1px solid;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: white;
  }

  .blue, .red {
    overflow: hidden;
  }

  .blue {
    margin-top: 30px;
  }

  button {
    margin: 10px auto;
  }

  ul.red li span {
    background: red;
  }

  ul.blue li span {
    background: dodgerblue;
  }

  ul.red li span.on {
    background: black;
  }

  ul.blue li span.on {
    background: black;
  }

</style>
