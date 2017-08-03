<template>
  <div class="ssq">

    <ul class="red">
      <li v-for="(items, i) in red">
        <span v-for="(item, k) in items" @click="toggleBall('red', i, k)" :class="{'on': item.chosen}">{{k}}</span>
      </li>
    </ul>

    <mt-button type="primary" @click.native="choseAllRed">全选红球</mt-button>
    <mt-button type="primary" @click.native="clearAllRed">清空红球</mt-button>


    <ul class="blue">
      <li v-for="(items, i) in blue">
        <span v-for="(item, k) in items" @click="toggleBall('blue', i, k)" :class="{'on': item.chosen}">{{k}}</span>
      </li>
    </ul>

    <mt-button type="primary" @click.native="choseAllBlue">全选蓝球</mt-button>
    <mt-button type="primary" @click.native="clearAllBlue">清空蓝球</mt-button>


    <div class="">
      <span>倍数：</span>
      <mt-button type="primary" @click="addDouble">+</mt-button>
      <input type="text" v-model.number="double">
      <mt-button type="primary" @click="minusDouble">-</mt-button>
    </div>

    <div class="">
      <mt-button type="primary" @click="randomChose('1')">机选一注</mt-button>
    </div>

    <p>
      <span class="">共 {{stock}} 注</span>
      <span class="">共 {{stock}} 钱</span>
    </p>

  </div>
</template>

<script>
	import Vue from 'vue'
	import {Button} from 'mint-ui'
	import core from '../assets/js/core'

	Vue.component(Button.name, Button)

//	console.log(core)
	let choseRed = [], choseBlue = []

	export default {
		name: 'ssq',
		data () {
			return {
				blue: [],
				red: [],
				choseRed: [],
				choseBlue: [],
				double: 1, // 倍数
				stock: 0, // 注
				total: 0, // 总金额
				issue: 1 // 追几期
			}
		},
		beforeCreate(){
			document.title = '双色球'

		},
		created(){
			this.createBall()
		},
		methods: {
			createBall: function () {

//        red: [{
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
					red.push(k)
				}

				me['red'] = red

				let blue = []
				for (let i = 0; i < 15; i++) {
					let k = {}
					let o = {}
					let num = (i + 1) + ''
					o.num = num
					o.chosen = false
					k[num] = o
					blue.push(k)
				}
				me['blue'] = blue
			},
			addDouble(){
				const me = this
				me.double++
			},
			minusDouble(){
				const me = this
				if (me.double >= 2) {
					me.double--
				}
			},
			choseAllRed(){
				const me = this
				me.batchState(me.red, true)
			},
			clearAllRed(){
				const me = this
				me.batchState(me.red, false)
			},
			choseAllBlue(){
				const me = this
				me.batchState(me.blue, true)
			},
			clearAllBlue(){
				const me = this
				me.batchState(me.blue, false)
			},
			toggleBall(type, i, k){
				const me = this

				let bChosen = !me[type][i][k]['chosen']

				Vue.set(me[type][i][k], 'chosen', bChosen)

				if (type === 'red') {
					if(me[type][i][k]['chosen']){
						choseRed.push(k)
          }else{
						core.rmArrEl(choseRed, k)
          }
				} else {
					if(me[type][i][k]['chosen']){
						choseBlue.push(k)
					}else{
						core.rmArrEl(choseBlue, k)
					}
				}
				me.calStock()
			},
			batchState(arr, state, cb){
				arr.forEach((items, i) => {
					for (let k in items) {
						if (cb) {
							cb(items, k, i)
						} else {
							Vue.set(items[k], 'chosen', state)
						}
					}
				})
			},
			randomChose(num){

			},
			calStock(){
				const me = this
//        let red = []
//				me.batchState(me.red, '', function (items, k, i) {
//          console.log(items[k]['chosen'])
//          if(items[k]['chosen']){
//
//          }
//				})

				core.comb(7, 6)
			},
			calMoney(){

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
    margin: 2px 5px;
  }

  ul li span {
    border-radius: 50%;
    border: 1px solid;
    display: inline-block;
    width: 100%;
    height: 100%;
    /*color: white;*/
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
    /*background: red;*/
  }

  ul.blue li span {
    /*background: dodgerblue;*/
  }

  ul.red li span.on {
    background: red;
    color: #fff;
  }

  ul.blue li span.on {
    background: dodgerblue;
    color: #fff;
  }

</style>
